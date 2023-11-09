<script setup>
import { ref, onMounted } from "vue";
import { useIssueStore } from "@/store/issue";
import { storeToRefs } from "pinia";
import normalize from "@/utils/normalize";
import router from "@/router";

const issueStore = useIssueStore();
const { issue } = storeToRefs(issueStore);

onMounted(async () => {
  await getIssue();
});

const getIssue = async () => {
  await issueStore.fetchIssue(router.currentRoute.value.params.id);
};

const urlAPI = process.env.URL_API;
const isThumbed = ref(true);
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
      <v-card-title class="bg-panel">
        Notes
        <v-btn flat class="float-right" color="primary">Add note</v-btn>
      </v-card-title>
      <div v-if="issue.notes" v-for="note in issue.notes">
        <v-row align="start" class="pa-4">
          <v-col cols="1" align-self="center">
            <v-avatar color="primary" size="32" class="font-weight-bold mr-2">
              {{ normalize.setAvatar(issue.assignedTo) }}
            </v-avatar>
          </v-col>
          <v-col cols="1" align-self="center" class="ml-n16">
            <span class="d-block">{{ issue.assignedTo }}</span>
            <span class="text-caption">Posted in 21/09/2000</span>
          </v-col>
          <v-col cols="9" align-self="center">
            <span>{{ note.content }}</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
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
      <v-row v-if="isThumbed" class="pa-4">
        <v-col v-for="file in issue.attachedFiles" cols="3" class="">
          <span class="text-caption"
            >{{ file.originalname }} ({{
              normalize.formatFileSize(file.size)
            }})</span
          >
          <v-dialog>
            <template v-slot:activator="{ props }">
              <v-img
                v-bind="props"
                class="cs-thumbs"
                :src="`${urlAPI}/files/${file.filename}`"
                aspect-ratio="1"
                cover
              />
            </template>

            <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-title>{{ file.originalname }}</v-card-title>
                <v-card-text>
                  <v-img
                    :src="`${urlAPI}/files/${file.filename}`"
                    cover
                  ></v-img>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
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
            <v-img :src="`${urlAPI}/files/${file.filename}`"></v-img>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <v-row class="ma-0">
        <v-col >
          <v-file-input
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
                +{{ issue.uploadFiles.length - 2 }} File(s)
              </span>
            </template>
          </template>
        </v-file-input>
        </v-col>
        <v-col align-self="center">
          <v-btn flat class="mb-1" color="primary">Send a new file</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
