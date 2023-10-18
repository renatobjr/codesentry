<script setup>
import { computed } from "vue";
import { PROJECT_ROUTES } from "@/router/projects";

const dataHeader = [
  { cols: "1", tag: "Admin" },
  { cols: "2", tag: "Project Name" },
  { cols: "7", tag: "Tracked Issues" },
  { cols: "2", tag: "Actions" },
];

const listIssues = {
  legend: [
    { data: "20", tag: "Open", class: "open" },
    { data: "30", tag: "In Progress", class: "inProgress" },
    { data: "20", tag: "Watingn feedback", class: "waitingFeedback" },
    { data: "10", tag: "Solved", class: "solved" },
    { data: "0", tag: "Closed", class: "closed" },
    { data: "0", tag: "Rejected", class: "rejected" },
    { data: "0", tag: "Assigned", class: "assigned" },
    { data: "20", tag: "Duplicated", class: "duplicated" },
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
    <v-row>
      <v-col cols="9">
        <cs-list :dataHeader="dataHeader">
      <template v-slot:dataList>
        <cs-list-item :cols="1">
          <v-avatar color="blue-grey" size="36"></v-avatar>
        </cs-list-item>
        <cs-list-item :cols="2">
          <span class="d-block">Project name</span>
          <span>Created at</span>
        </cs-list-item>
        <cs-list-item :cols="7">
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
        </cs-list-item>
        <cs-list-item :cols="2">
          <v-icon color="primary" class="mr-4">mdi-pencil</v-icon>
          <v-icon color="primary" class="mr-4">mdi-eye</v-icon>
          <v-icon color="primary" class="mr-4">mdi-delete</v-icon>
        </cs-list-item>
      </template>
    </cs-list>
      </v-col>
      <v-col cols="3" align-self="center">
        <v-card class="cs-header-list" rounded="0" elevation="0">
          <v-list density="compact" class="bg-panel pa-3 font-weight-bold"
            >Legends</v-list
          >
          <v-divider></v-divider>
          <v-list density="compact" class="pa-2 bg-maingrey">
            <div class="d-block" v-for="legend in listIssues.legend">
              <span class="mr-2">
                <v-icon class="mr-2" :color="legend.class">mdi-circle</v-icon>
                <span class="text-grey-darken-5">{{ legend.tag }}</span>
              </span>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
