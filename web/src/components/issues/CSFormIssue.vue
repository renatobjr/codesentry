<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useIssueStore } from "@/store/issue";
import { useProjectStore } from "@/store/project";
import { useSnackbarStore } from "@/store/snackbar";
import { useUserStore } from "@/store/user";
import dataUser from "@/data/users";
import router from "@/router";
import validator from "@/utils/validator";
import { watch } from "vue";

const props = defineProps<{
  isEdit: boolean;
}>();

onBeforeMount(async () => {
  await userStore.listUsers();
  await issueStore.listIssues();
  await projectStore.listProjects();
  await gerIssue();
});

const urlAPI = process.env.URL_API;
const issueStore = useIssueStore();
const userStore = useUserStore();
const projectStore = useProjectStore();
const { userList } = storeToRefs(userStore);
const { projectList } = storeToRefs(projectStore);
const issue = reactive({
  priority: "",
  reproducibility: "",
  project: "" as any,
  resume: "",
  description: "",
  stepsToReproduce: "",
  assignedTo: "" as any,
  state: "",
  previewFiles: [] as any[],
  attachedFiles: [] as any[],
});
const form = ref();

const gerIssue = async () => {
  if (props.isEdit) {
    await issueStore.fetchIssue(router.currentRoute.value.params.id);

    issue.priority = issueStore.issue.priority;
    issue.reproducibility = issueStore.issue.reproducibility;
    issue.project = issueStore.issue.project;
    issue.state = issueStore.issue.state;
    issue.resume = issueStore.issue.resume;
    issue.description = issueStore.issue.description;
    issue.stepsToReproduce = issueStore.issue.stepsToReproduce;
    issue.assignedTo = issueStore.issue.assignedTo;
    issue.previewFiles = issueStore.issue.attachedFiles || [];
  }
};

const listDevelopers = () => {
  return userList.value.filter(
    (user: any) => user.role === dataUser.roles.DEVELOPER
  );
};

const addPreview = () => {
  issue.attachedFiles.forEach((file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      issue.previewFiles.push({
        filename: file.name,
        originalname: file.name,
        size: file.size,
        preview: URL.createObjectURL(file),
      });
    };

    reader.readAsDataURL(file);
  });
};

const removeFile = (file: any) => {
  issue.attachedFiles = issue.attachedFiles.filter((img) => {
    return img.name != file.filename;
  });
  issue.previewFiles = issue.previewFiles.filter((img) => {
    return img.filename != file.filename;
  });
};

const save = async () => {
  const is = await form.value.validate();

  if (is.valid) {
    let snackBarMessage: {
      message: string;
      color: string;
    };

    const result = props.isEdit
      ? await issueStore.updateIssue({
          id: router.currentRoute.value.params.id,
          issue: issue,
        })
      : await issueStore.createIssue(issue);

    if (result == true) {
      snackBarMessage = {
        message: "Issue saved successfully",
        color: "success",
      };
      router.push({ name: "issues" });
    } else {
      snackBarMessage = {
        message: result,
        color: "error",
      };
    }

    useSnackbarStore().showSnackbar(snackBarMessage);
  }
};

const cancel = () => {
  router.go(-1);
};

watch(
  () => issue.attachedFiles,
  (newValue, oldValue) => {
    if (!props.isEdit && newValue.length == 0) {
      issue.previewFiles = [];
    } else {
      oldValue.forEach((file) => {
        issue.previewFiles = issue.previewFiles.filter((img) => {
          return img.filename != file.name;
        });
      });
    }
  }
);
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
            <v-row class="mt-n2">
              <v-col>
                <v-select
                  v-if="isEdit"
                  v-model="issue.state"
                  density="compact"
                  variant="outlined"
                  :items="issueStore.state"
                  item-title="name"
                  item-value="value"
                  label="State"
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props">
                      <template v-slot:prepend>
                        <v-icon :color="item.value">mdi-square-rounded</v-icon>
                      </template>
                    </v-list-item>
                  </template>
                  <template v-slot:selection="{ item }">
                    <v-chip
                      v-if="item.title != ''"
                      variant="flat"
                      :color="item.value"
                      label
                    >
                      <span>{{ item.title }}</span>
                    </v-chip>
                  </template>
                </v-select>
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
              <v-col v-if="isEdit">
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
                  v-model="issue.attachedFiles"
                  density="compact"
                  variant="outlined"
                  color="primary"
                  clearable
                  counter
                  :label="isEdit ? 'Add files' : 'Upload files'"
                  multiple
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  :show-size="1000"
                  :accept="['image/png', 'image/jpeg', 'image/bmp, image/jpg']"
                  @change="addPreview()"
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
                        +{{ issue.attachedFiles.length - 2 }} File(s)
                      </span>
                    </template>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
            <v-card
              v-if="
                issue.attachedFiles.length != 0 ||
                issue.previewFiles.length != 0
              "
              variant="outlined"
              elevation="0"
              rounded="mg"
              class="mb-6 mt-4"
            >
              <v-row align="start" class="pa-4">
                <v-col v-for="file in issue.previewFiles" cols="2">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card
                      :elevation="isHovering ? 8 : 2"
                      :class="{ 'on-hover': isHovering }"
                      v-bind="props"
                    >
                      <v-img
                        :class="{ 'cs-hover-img-filter': isHovering }"
                        :src="
                          file.preview
                            ? file.preview
                            : `${urlAPI}/files/${file.filename}`
                        "
                        aspect-ratio="1"
                        cover
                      />
                      <div
                        style="
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                        "
                      >
                        <v-btn
                          :class="{ 'cs-hover-btn-none': !isHovering }"
                          color="error"
                          icon="mdi-image-remove"
                          elevation="2"
                          small
                          @click="removeFile(file)"
                        ></v-btn>
                      </div>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card>

            <!-- <v-card
              v-if="isEdit"
              variant="outlined"
              class="mb-6"
              elevation="0"
              roudedn-lg
            >
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
            </v-card> -->
            <v-row>
              <v-col>
                <v-btn @click="save" flat class="mr-4" color="primary">{{
                  isEdit ? "Save" : "Create"
                }}</v-btn>
                <v-btn @click="cancel" flat color="warning">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
