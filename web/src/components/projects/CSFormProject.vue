<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import validator from '@/utils/validator';
import { useProjectStore } from '@/store/project';
import { useUserStore } from '@/store/user';
import { useSnackbarStore } from '@/store/snackbar';
import { storeToRefs } from 'pinia';
import router from '@/router';
import { PROJECTS_ROUTES } from '@/router/projects';
import dataUser from '@/data/users';

const props = defineProps({
  isEdit: Boolean,
});

onBeforeMount(async () => {
  await userStore.listUsers();
  await getProject();
});

const projectStore = useProjectStore();
const userStore = useUserStore();
const { userList } = storeToRefs(userStore);
const project = reactive({
  name: '',
  description: '',
  admin: '',
  reporters: [],
  assignees: [],
  mainLanguage: '',
  mainDatabase: '',
})
const form = ref()

const getProject = async () => {
  if (props.isEdit) {
    await projectStore.fetchProject(router.currentRoute.value.params.id);

    project.name = projectStore.project.name;
    project.description = projectStore.project.description;
    project.admin = projectStore.project.admin;
    project.reporters = projectStore.project.reporters;
    project.assignees = projectStore.project.assignees;
    project.mainLanguage = projectStore.project.mainLanguage;
    project.mainDatabase = projectStore.project.mainDatabase;
  }
}

const listAdmins = () => {
  return userList.value.filter((user) => user.role === dataUser.roles.ADMIN);
}

const listReporters = () => {
  return userList.value.filter((user) => user.role === dataUser.roles.REPORTER);
}

const listDevelopers = () => {
  return userList.value.filter((user) => user.role === dataUser.roles.DEVELOPER);
}

const save = async () => {
  const is = await form.value.validate();

  if (is.valid) {
    let snackBarMessage = {};

    const result = props.isEdit
      ? await projectStore.updateProject({id: router.currentRoute.value.params.id, project: project})
      : await projectStore.createProject(project);

    if (result == true) {
      router.push({ name: PROJECTS_ROUTES.LIST });

      snackBarMessage = {
        message: props.isEdit
          ? 'Project updated sucessfully'
          : 'Project saved successfully',
        color: 'success',
      };
    } else {
      snackBarMessage = {
        message: result,
        color: 'error',
      };
    }

    useSnackbarStore().showSnackbar(snackBarMessage);
  }
}

const cancel = () => {
  router.go(-1);
}
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card color="panel" rounded="0" elevation="1" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">
            {{ isEdit ? "Edit Project" : "Create a new project" }}
          </span>
        </v-card>
        <v-card class="bg-maingrey pa-10" rounded="0" elevation="1">
          <v-form ref="form">
            <v-text-field
              v-model="project.name"
              density="compact"
              variant="outlined"
              label="Project Name"
              :rules="[validator.isRequired]"
            ></v-text-field>
            <v-text-field
              v-model="project.description"
              density="compact"
              variant="outlined"
              label="Description"
              :rules="[validator.isRequired]"
              class="mt-3"
            ></v-text-field>
            <v-row class="mt-1">
              <v-col>
                <v-select
                  v-model="project.admin"
                  density="compact"
                  variant="outlined"
                  :items="listAdmins()"
                  item-title="name"
                  item-value="_id"
                  label="Admin"
                  :rules="[validator.isSelected]"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="project.reporters"
                  density="compact"
                  variant="outlined"
                  :items="listReporters()"
                  item-title="name"
                  item-value="_id"
                  label="Reporters"
                  multiple
                  :rules="[validator.isSelected]"
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip color="primary" label v-if="index < 2">
                      <span>{{ item.title }}</span>
                    </v-chip>

                    <span
                      v-if="index === 2"
                      class="ml-2 text-black text-caption align-self-center"
                    >
                      (+ {{ selectedUsers.length - 2 }} others)
                    </span>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="project.assignees"
                  density="compact"
                  variant="outlined"
                  :items="listDevelopers()"
                  item-title="name"
                  item-value="_id"
                  label="Assignees"
                  multiple
                  :rules="[validator.isSelected]"
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip color="primary" label v-if="index < 2">
                      <span>{{ item.title }}</span>
                    </v-chip>

                    <span
                      v-if="index === 2"
                      class="ml-2 text-black text-caption align-self-center"
                    >
                      (+ {{ selectedUsers.length - 2 }} others)
                    </span>
                  </template>
                </v-select>
              </v-col>
            </v-row>
            <v-row class="mt-1">
              <v-col>
                <v-text-field
                  v-model="project.mainLanguage"
                  density="compact"
                  variant="outlined"
                  label="Main language"
                  :rules="[validator.isRequired]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="project.mainDatabase"
                  density="compact"
                  variant="outlined"
                  label="Main database"
                  :rules="[validator.isRequired]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  @click="save"
                  flat
                  class="mr-4"
                  color="primary"
                  >{{ isEdit ? "Save" : "Create" }}</v-btn
                >
                <v-btn @click="cancel" flat color="warning"
                  >Cancel</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
