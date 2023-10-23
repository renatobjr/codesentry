<script setup>
// Only for demo purpose
import { dataIssues } from "@/data/issues";
import normalize from "@/utils/normalize";

import { ref, onBeforeMount } from "vue";
import router from "@/router";

let issue = ref({});
let panel = ref([0, 1, 2]);

function getIssue() {
  issue.value = dataIssues.find(
    ({ id }) => id.toString() === router.currentRoute.value.params.id
  );
}

onBeforeMount(() => {
  getIssue();
});
</script>

<template>
  <v-container fluid class="cs-container">
    <!-- Header Info -->
    <v-card elevation="1" color="primary" rounded-lg>
      <v-card-title class="pa-4">
        <v-chip variant="flat" class="text-capitalize mr-10" color="open" label
          >Open</v-chip
        >
        <span class="mr-10">Bug 009090</span>
        <span class="mr-10">Project Pandora</span>
        <span class="mr-10">Opened at 25/09/2012</span>
        <span class="mr-10">Updated at 29/09/2120</span>
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
          <span class="text-capitalize">{{ issue.reporter }}</span>
        </v-col>
        <v-col cols="2">
          <span class="font-weight-bold">Assigned to: </span>
          <span class="text-capitalize">{{ issue.assignedTo }}</span>
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
    <v-card class="mt-4" elevation="1" roudedn-lg>
      <v-card-title class="bg-panel">Related To</v-card-title>
      <div v-for="related in issue.relatedTo">
        <v-row align="center" justify="center" class="pa-4">
          <v-col align-self="center">
            <v-icon :class="`${related.state}-icon mr-2`">mdi-square-rounded</v-icon>
            <span class="text-capitalize">
              {{ normalize.formatTags(issue.state) }}
            </span>
            <span class="ml-4">{{ issue.description }}</span>
            <span class="ml-4"><strong>Assigned to: </strong>{{ issue.assignedTo }}</span>
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
      </v-card-title>
      <div v-for="note in issue.notes">
        <v-row align="start" class="pa-4">
          <v-col cols="1" align-self="center">
            <v-avatar color="primary" size="32" class="font-weight-bold mr-2">
              {{ normalize.setAvatar(issue.assignedTo) }}
            </v-avatar>
          </v-col>
          <v-col cols="1" align-self="center" class="ml-n16">
            <span class="d-block">{{ issue.assignedTo }}</span>
            <span  class="text-caption">Posted in 21/09/2000</span>
          </v-col>
          <v-col cols="9" align-self="center">
            <span >{{ note.content }}</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
    </v-card>

    <!-- Files -->
    <v-card class="mt-4" elevation="1" rounded-lg>
      <v-card-title class="bg-panel">Files</v-card-title>
      <div v-for="file in issue.attachedFiles">
        <v-row align="start" class="pa-4">
          <v-col align-self="center" >
            <span class="text-caption">{{  file.name  }} (1.878 kbits)</span>
            <v-img :src="file.url"></v-img>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>
