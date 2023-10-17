<script setup>
import { computed } from "vue";
import { PROJECT_ROUTES } from "@/router/projects";

const listIssues = {
  legend: [
    { data: "0", tag: "Open", class: "open" },
    { data: "0", tag: "In Progress", class: "inProgress" },
    { data: "0", tag: "Watingn feedback", class: "waitingFeedback" },
    { data: "100", tag: "Solved", class: "solved" },
    { data: "0", tag: "Closed", class: "closed" },
    { data: "0", tag: "Rejected", class: "rejected" },
    { data: "0", tag: "Assigned", class: "assigned" },
    { data: "0", tag: "Duplicated", class: "duplicated" },
  ],
};

const stackedBar = computed(() => {
  let stackedValue = [];
  for (const grid of listIssues.legend) {
    stackedValue += `${grid.data}fr`;
  }

  return stackedValue.split("fr").join("fr ").trim();
});
</script>

<template>
  <cs-header
    title="Projects"
    :actions="[{ title: 'New Project', route: PROJECT_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    <v-card class="cs-header-list" rounded="0" elevation="0">
      <v-list density="compact" class="pa-2 bg-primary">
        <v-row style="margin: 0 auto;">
          <v-col align-self="center" cols="1" class="d-flex justify-center">
            <span class="font-weight-bold">Stakeholder</span>
          </v-col>
          <v-col align-self="center" cols="2">
            <span class="font-weight-bold">Project Name</span>
          </v-col>
          <v-col align-self="center" cols="7">
            <span class="mb-2 d-block font-weight-bold">Tracked Issues</span>
            <div
              class="d-inline"
              v-for="legend in listIssues.legend"
            >
              <span class="mr-2">
                <v-icon :color="legend.class">mdi-square</v-icon>
                <span>{{ legend.tag }}</span>
              </span>
            </div>
          </v-col>
          <v-col class="d-flex justify-center" align-self="center">
            <span class="font-weight-bold">Actions</span>
          </v-col>
        </v-row>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" class="pa-2 bg-maingrey">
        <v-row style="margin: 0 auto;">
          <v-col align-self="center" cols="1" class="d-flex justify-center">
            <v-avatar color="blue-grey" size="36"></v-avatar>
          </v-col>
          <v-col align-self="center" cols="2">
            <span class="d-block">Project name</span>
            <span>Created at</span>
          </v-col>
          <v-col align-self="center" cols="7">
            <div
              id="issuesGraph"
              :style="{
                'grid-template-columns': `
                ${stackedBar}`,
              }"
            >
              <div v-for="legend in listIssues.legend">
                <div :id="legend.class"></div>
              </div>
            </div>
          </v-col>
          <v-col class="d-flex justify-center" align-self="center">
            <v-icon color="primary" class="ma-2">mdi-delete</v-icon>
            <v-icon color="primary" class="ma-2">mdi-pencil</v-icon>
            <v-icon color="primary" class="ma-2">mdi-close-circle</v-icon>
          </v-col>
        </v-row>
      </v-list>
    </v-card>
  </v-container>
</template>
