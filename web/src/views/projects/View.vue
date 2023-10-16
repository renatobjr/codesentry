<script setup>
import { computed } from 'vue';
import { PROJECT_ROUTES } from '@/router/projects';

const listIssues = {
  legend: [
    { data: '10', tag: "Open", id: "open" },
    { data: '10', tag: "In Progress", id: "in-progress" },
    { data: '20', tag: "Watingn feedback", id: "waiting-feedback" },
    { data: '30', tag: "Solved", id: "solved" },
    { data: '10', tag: "Closed", id: "closed" },
    { data: '5', tag: "Rejected", id: "rejected" },
    { data: '5', tag: "Assigned", id: "assigned" },
    { data: '15', tag: "Duplicated", id: "duplicated" },
  ],
};

const stackedBar = computed(() => {
  let stackedValue = [] ;
  for (const grid of listIssues.legend) {
    stackedValue += `${grid.data}fr`;
  }

  return stackedValue.split('fr').join('fr ').trim();
});
</script>

<template>
  <cs-header title="Projects" :actions="[{ title: 'New Project', route: PROJECT_ROUTES.ADD }]"></cs-header>

  <v-row align="center" justify="center">
    <v-col class="pa-0">
      <v-card rounded="0">
        <v-list density="compact" class="pa-2">
          <v-row style="margin: 0 auto">
            <v-col lg="1" align-self="center">
              <span class="d-block text-uppercase">Admin</span>
            </v-col>
            <v-col cols="2" align-self="center">
              <span class="d-block text-uppercase">Project Name</span>
            </v-col>
            <v-col class="" cols="7" align-self="center">
              <span class="d-block text-uppercase">Track Issues</span>
              <div
                class="d-inline"
                v-for="legend in listIssues.legend"
                :key="legend.tag"
              >
                <span class="mr-3">
                  <v-icon :id="legend.id + '-icon'">mdi-square-rounded</v-icon>
                  <span> {{ legend.tag }}</span>
                </span>
              </div>
            </v-col>
            <v-col cols="2" align-self="center">
              <span class="d-block text-uppercase float-right">Actions</span>
            </v-col>
          </v-row>
        </v-list>
        <v-divider></v-divider>
      </v-card>
      <v-card rounded="0" v-for="item in 2" :key="item">
        <v-list density="compact" class="pa-3">
          <v-row style="margin: 0 auto">
            <v-col lg="1">
              <v-avatar class="me-4" color="blue-grey" size="36"></v-avatar>
            </v-col>
            <v-col cols="2">
              <span class="d-block">Project Name</span>
              <span>Created at</span>
            </v-col>
            <v-col class="cs-datalist-col-center" cols="7" align-self="center">
              <div
                id="issuesGraph"
                :style="{
                  'grid-template-columns': `
                    ${stackedBar}`,
                }"
              >
                <div v-for="legend in listIssues.legend">
                  <div :id="legend.id"></div>
                </div>
              </div>
            </v-col>
            <v-col cols="2">
              <v-icon color="red" class="float-right">mdi-delete</v-icon>
              <v-icon class="float-right mr-4">mdi-pencil</v-icon>
            </v-col>
          </v-row>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>
