<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import { storeToRefs } from "pinia";

import router from "@/router";
import { useIssueStore } from "@/store/issue";
import { useAuthStore } from "@/store/auth";
import { useSnackbarStore } from "@/store/snackbar";
import { useDialogStore } from "@/store/dialog";
import validator from "@/utils/validator";
import normalize from "@/utils/normalize";

const issueStore = useIssueStore();
const authStore = useAuthStore();

const { issue } = storeToRefs(issueStore);
const { loggedUser } = storeToRefs(authStore);
const urlAPI = process.env.URL_API;
const isThumbed = ref(true);
// Notes
const noteContent = ref("");
const uploadedFiles = ref([]);
const sendingNote = ref(false);
const sendingImg = ref(false);

onMounted(async () => {
  await getIssue();
});

const getIssue = async () => {
  await issueStore.fetchIssue(router.currentRoute.value.params.id);
};

const appendNote = async () => {
  sendingNote.value = true;
  await issueStore
    .appendNote({
      content: noteContent.value,
      postedBy: loggedUser.value._id,
      postedAt: new Date(),
    })
    .then((data) => {
      sendingNote.value = false;
      // Show snack
      useSnackbarStore().showSnackbar({
        message: "Note appended successfully",
        color: "success",
      });
      issue.value.notes.push(data);
    })
    .catch((err) => {
      sendingNote.value = false;
      // Show snack
      useSnackbarStore().showSnackbar({
        message: err.message,
        color: "error",
      });
    });
};

const appendFiles = async () => {
  sendingImg.value = true;
  await issueStore
    .appendFiles(uploadedFiles)
    .then(() => {
      sendingImg.value = false;
      // Show snack
      useSnackbarStore().showSnackbar({
        message: "Files appended successfully",
        color: "success",
      });
    })
    .catch((err) => {
      // Show snack
      useSnackbarStore().showSnackbar({
        message: err.message,
        color: "error",
      });
    });
};

const addPreview = () => {
  uploadedFiles.value.forEach((file:any) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      issue.value.attachedFiles.push({
        filename: file.name,
        originalname: file.name,
        size: file.size,
        preview: URL.createObjectURL(file),
      });
    };

    reader.readAsDataURL(file);
  });
};

const fileUrl = (file:any) => {
  return file.preview ? file.preview : `${urlAPI}/files/${file.filename}`;
};

const showImg = (file:any) => {
  const url = fileUrl(file);
  useDialogStore().openDialog({
    title: file.originalname,
    message: url,
    showActions: false,
    type: "img",
  });
};

const removeFile = async (file:any) => {
  if (!file.preview) await issueStore.removeFile(file);

  issue.value.attachedFiles = issue.value.attachedFiles.filter(
    (f) => f.filename !== file.filename
  );
};
</script>

<template>
  <v-container fluid class="cs-container">
    <!-- Header Info -->
    <v-card elevation="1" color="primary" rounded-lg>
      <v-card-title class="pa-4">
        <v-chip
          variant="flat"
          class="text-capitalize mr-10"
          :color="`${issue.state}`"
          label
          >{{ issue.state }}</v-chip
        >
        <span class="mr-10">{{ issue.project.name }}</span>
        <span class="mr-10"
          >Opened at {{ normalize.formatDate(issue.createdAt) }}</span
        >
        <span class="mr-10"
          >Updated at {{ normalize.formatDate(issue.updatedAt) }}</span
        >
        <span class="text-h5 d-block mt-4">{{ issue.resume }}</span>
      </v-card-title>
    </v-card>

    <!-- Bug details -->
    <v-card class="mt-4" elevation="1" roudedn-lg>
      <v-card-title class="bg-panel">Bug Details</v-card-title>
      <v-row align="start" class="pa-4">
        <v-col cols="2" align-self="center">
          <span class="font-weight-bold">Priority: </span>
          <v-icon
            size="large"
            :color="normalize.setPriorityIcons(issue.priority).color"
            >{{ normalize.setPriorityIcons(issue.priority).icon }}</v-icon
          >
          <span class="text-capitalize">{{
            normalize.formatTags(issue.priority)
          }}</span>
        </v-col>
        <v-col cols="2" align-self="center">
          <span class="font-weight-bold">Resume: </span>
          <span class="text-capitalize">{{ issue.resume }}</span>
        </v-col>
        <v-col align-self="center">
          <span class="font-weight-bold">Description: </span>
          <span class="text-capitalize">{{ issue.description }}</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="start" class="pa-4">
        <v-col cols="2">
          <span class="font-weight-bold">Reporter: </span>
          <span class="text-capitalize">{{ issue.reporter.name }}</span>
        </v-col>
        <v-col cols="2">
          <span class="font-weight-bold">Assigned to: </span>
          <span class="text-capitalize">{{
            !issue.assignedTo ? "Not assigned" : issue.assignedTo.name
          }}</span>
        </v-col>
        <v-col cols="2">
          <span class="font-weight-bold">Reproducibility: </span>
          <span class="text-capitalize">{{ issue.reproducibility }}</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="start" class="pa-4">
        <v-col cols="12">
          <span class="font-weight-bold d-block">Steps to reproduce: </span>
          <span class="text-capitalize">{{ issue.stepsToReproduce }}</span>
        </v-col>
      </v-row>
    </v-card>

    <!-- Related to -->
    <v-card v-if="issue.relatedTo" class="mt-4" elevation="1" roudedn-lg>
      <v-card-title class="bg-panel">Related To</v-card-title>
      <div v-for="related in issue.relatedTo">
        <v-row align="center" justify="center" class="pa-4">
          <v-col align-self="center">
            <v-icon :class="`${related.state}-icon mr-2`"
              >mdi-square-rounded</v-icon
            >
            <span class="text-capitalize">
              {{ normalize.formatTags(issue.state) }}
            </span>
            <span class="ml-4">{{ issue.description }}</span>
            <span class="ml-4"
              ><strong>Assigned to: </strong>{{ issue.assignedTo }}</span
            >
          </v-col>
          <v-col align-self="center">
            <v-btn flat class="d-flex float-right" size="small">view</v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
    </v-card>

    <!-- Notes -->
    <v-card class="mt-4" elevation="1" roudedn-lg>
      <v-card-title class="bg-panel"> Notes </v-card-title>
      <div v-if="issue.notes" v-for="note in issue.notes">
        <v-row align="start" class="pa-4">
          <v-col cols="1" align-self="center">
            <v-avatar color="primary" size="32" class="font-weight-bold mr-2">
              {{ normalize.setAvatar(note.postedBy.name) }}
            </v-avatar>
          </v-col>
          <v-col cols="2" align-self="center" class="ml-n16">
            <span class="d-block">{{
              note.postedBy.name || loggedUser.name
            }}</span>
            <span class="text-caption"
              >Posted in
              {{ normalize.formatDate(note.postedAt) || "Posted now" }}</span
            >
          </v-col>
          <v-col cols="9" align-self="center">
            <span>{{ note.content }}</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
      <v-divider></v-divider>
      <v-row class="ma-0">
        <v-col>
          <v-text-field
            v-model="noteContent"
            density="compact"
            variant="outlined"
            label="Add a note"
            class="mt-4"
            :rules="[validator.isRequired]"
          ></v-text-field>
        </v-col>
        <v-col align-self="center">
          <v-btn
            :disabled="noteContent.length == 0"
            flat
            class="mb-1"
            color="primary"
            :loading="sendingNote"
            @click="appendNote"
            >Append a note</v-btn
          >
        </v-col>
      </v-row>
    </v-card>

    <!-- Files -->
    <v-card class="mt-4" elevation="1" rounded-lg>
      <v-card-title class="bg-panel">
        Files
        <v-switch
          v-if="issue.attachedFiles.length > 0"
          inset
          v-model="isThumbed"
          class="mt-n2 mb-n2 d-flex float-right"
          label="Thumbnails"
          color="primary"
        ></v-switch>
      </v-card-title>
      <!-- Thumbtype -->
      <div v-if="issue.attachedFiles.length > 0">
        <v-row v-if="isThumbed" class="pa-4">
          <v-col v-for="file in issue.attachedFiles" cols="2">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :elevation="isHovering ? 8 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
              >
                <v-img
                  :class="{ 'cs-hover-img-filter': isHovering }"
                  :src="fileUrl(file)"
                  aspect-ratio="1"
                  cover
                  @click="showImg(file)"
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
        <!-- columntype -->
        <div v-else v-for="file in issue.attachedFiles">
          <v-row align="start" class="pa-4">
            <v-col align-self="center">
              <span class="text-caption"
                >{{ file.originalname }} ({{
                  normalize.formatFileSize(file.size)
                }})</span
              >
              <v-img :src="fileUrl(file)"></v-img>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-divider></v-divider>
      <v-row class="ma-0">
        <v-col>
          <v-file-input
            v-model="uploadedFiles"
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
            class="mt-4"
            @change="addPreview()"
          >
            <template v-slot:selection="{ fileNames }">
              <template v-for="(fileName, index) in fileNames" :key="fileName">
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
                  +{{ uploadedFiles.length - 2 }} File(s)
                </span>
              </template>
            </template>
          </v-file-input>
        </v-col>
        <v-col align-self="center">
          <v-btn
            flat
            class="mb-1"
            color="primary"
            @click="appendFiles"
            :disabled="uploadedFiles.length == 0"
            :loading="sendingImg"
            >append files</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
