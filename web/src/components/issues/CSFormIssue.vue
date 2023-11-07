<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useIssueStore } from "@/store/issue";
import { useSnackbarStore } from "@/store/snackbar";
import { useUserStore } from "@/store/user";
import { useProjectStore } from "@/store/project";
import dataUser from "@/data/users";
import router from "@/router";
import validator from "@/utils/validator";

const props = defineProps({
  isEdit: Boolean,
});


onBeforeMount(async () => {
  await userStore.listUsers();
  await issueStore.listIssues();
  await projectStore.listProjects();
});

const issueStore = useIssueStore();
const userStore = useUserStore();
const projectStore = useProjectStore();
const { userList } = storeToRefs(userStore);
const { projectList } = storeToRefs(projectStore);
const issue = reactive({
  priority: "",
  reproducibility: "",
  state: "",
  project: "",
  resume: "",
  description: "",
  stepsToReproduce: "",
  assignedTo: '',
  uploadFiles: [],
});
const form = ref();

const listDevelopers = () => {
  return userList.value.filter((user) => user.role === dataUser.roles.DEVELOPER);
};

const save = async () => {
  const is = await form.value.validate();

  if (is.valid) {
    const result = props.isEdit
      // ? await issueStore.updateIssue(issue)
      ? console.log("update issue")
      : await issueStore.createIssue(issue);
  };
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
          <span class="text-h5 text-grey-darken-5">{{
            isEdit ? "Edit Issue" : "Create new issue"
          }}</span>
        </v-card>
        <v-card color="maingrey" rounded="0" elevation="1" class="pa-10">
          <v-form ref="form">
            <v-row>
              <v-col>
                <v-select
                  v-model="issue.priority"
                  density="compact"
                  variant="outlined"
                  :items="issueStore.priority"
                  item-title="name"
                  item-value="value"
                  label="Priority"
                  :rules="[validator.isSelected]"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="issue.reproducibility"
                  density="compact"
                  variant="outlined"
                  :items="issueStore.reproducibility"
                  item-title="name"
                  item-value="value"
                  label="Reproducibility"
                  :rules="[validator.isSelected]"
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="mt-1">
              <v-col>
                <v-select
                  v-model="issue.state"
                  density="compact"
                  variant="outlined"
                  :items="issueStore.state"
                  item-title="name"
                  item-value="value"
                  label="State"
                  :rules="[validator.isSelected]"
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props">
                      <template v-slot:prepend>
                        <v-icon :color="item.value"
                          >mdi-square-rounded</v-icon
                        >
                      </template>
                    </v-list-item>
                  </template>
                  <template v-slot:selection="{ item }">
                    <v-chip v-if="item.title != ''" variant="flat" :color="item.value" label>
                      <span>{{ item.title }}</span>
                    </v-chip>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="issue.project"
                  density="compact"
                  variant="outlined"
                  :items="projectList"
                  item-title="name"
                  item-value="_id"
                  label="Project"
                  :rules="[validator.isSelected]"
                ></v-select>
              </v-col>
            </v-row>
            <v-text-field
              v-model="issue.resume"
              density="compact"
              variant="outlined"
              name="resume"
              label="Resume"
              class="mt-3"
              :rules="[validator.isRequired]"
            ></v-text-field>
            <v-textarea
              v-model="issue.description"
              density="compact"
              variant="outlined"
              name="issusDescription"
              label="Description"
              class="mt-3"
              :rules="[validator.isRequired]"
            ></v-textarea>
            <v-textarea
              v-model="issue.stepsToReproduce"
              density="compact"
              variant="outlined"
              name="stepsToReproduce"
              label="Steps to reproduce"
              class="mt-3"
            ></v-textarea>
            <v-row class="mt-1">
              <v-col>
                <v-select
                  v-model="issue.assignedTo"
                  density="compact"
                  variant="outlined"
                  :items="listDevelopers()"
                  item-title="name"
                  item-value="_id"
                  label="Assigned to"
                ></v-select>
              </v-col>
              <v-col>
                <v-file-input
                  v-model="issue.uploadFiles"
                  density="compact"
                  variant="outlined"
                  color="primary"
                  counter
                  label="File input"
                  multiple
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  :show-size="1000"
                  :accept="['image/png', 'image/jpeg', 'image/bmp, image/jpg']"
                >
                  <template v-slot:selection="{ fileNames }">
                    <template
                      v-for="(fileName, index) in fileNames"
                      :key="fileName"
                    >
                      <v-chip
                        v-if="index < 2"
                        color="primary"
                        label
                        size="small"
                        class="me-2"
                      >
                        {{ fileName }}
                      </v-chip>

                      <span
                        v-else-if="index === 2"
                        class="ml-2 text-black text-caption align-self-center"
                      >
                        +{{ issue.uploadFiles.length - 2 }} File(s)
                      </span>
                    </template>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
            <v-card v-if="isEdit" variant="outlined" class="mb-6" elevation="0" roudedn-lg>
              <v-row align="start" class="pa-4">
                <v-col cols="1" align-self="center">
                  <v-avatar
                    color="primary"
                    size="32"
                    class="font-weight-bold mr-2"
                  >
                    JF
                  </v-avatar>
                </v-col>
                <v-col cols="1" align-self="center" class="ml-n16">
                  <span class="d-block">James Franco</span>
                  <span class="text-caption">Posted in 21/09/2000</span>
                </v-col>
                <v-col cols="9" align-self="center">
                  <span>Lorem ipsum</span>
                </v-col>
              </v-row>
            </v-card>
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
