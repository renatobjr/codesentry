<script setup>
// Only for demo purpose
import { dataProjects, dataHeader } from "@/data/projects";
import { dataLegends } from "@/data/legends";

import normalize from "@/utils/normalize";
import router from "@/router";
import { PROJECTS_ROUTES } from "@/router/projects";
import { ISSUES_ROUTES } from "@/router/issues";
import { ref } from "vue";

const itemsPerPage = ref(normalize.setItemsPerPage);
const header = ref(dataHeader);
const projects = ref(dataProjects);

let stackedValue = ref([]);
let dataFormated = ref([]);

const edit = (id) => {
  router.push({ name: PROJECTS_ROUTES.EDIT, params: { id } });
};

const view = (id) => {
  router.push({ name: PROJECTS_ROUTES.VIEW, params: { id } });
};

let stackedBar = (issues) => {
  let dataGraph = [];
  let totalIssues = issues.length;

  try {
    issues.forEach((issue) => {
      dataGraph[issue.state] = (dataGraph[issue.state] || 0) + 1;
    });

    dataFormated = Object.entries(dataGraph).map((issue) => ({
      data: ((issue[1] / totalIssues) * 100).toFixed(0),
      state: issue[0],
      class: issue[0].toLowerCase(),
    }));

    dataFormated.sort((a, b) => {
      const stateA = a.state.toUpperCase();
      const stateB = b.state.toUpperCase();

      if (stateA < stateB) {
        return -1;
      }
      if (stateA > stateB) {
        return 1;
      }
      return 0;
    });

    stackedValue = [];
    for (const grid of dataFormated) {
      stackedValue += `${grid.data}fr`;
    }

    return stackedValue.split("fr").join("fr ").trim();
  } catch (error) {
    return "No Issues Found";
  }
};
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row>
      <v-col cols="10">
        <v-data-table-server
          v-model:items-per-page="itemsPerPage"
          :headers="header"
          :items="projects"
          :items-length="projects.length"
          :loading="false"
          class="rounded elevation-1"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.admin }}</td>
              <td>{{ item.name }}</td>
              <td>
                <div
                  id="issuesGraph"
                  :style="{
                    'grid-template-columns': `${stackedBar(
                      item.trackedIssues
                    )}`,
                  }"
                >
                  <div
                    v-if="dataFormated.length != 0"
                    v-for="legend in dataFormated"
                  >
                    <div :id="legend.class"></div>
                  </div>
                  <div v-else>
                    <v-btn
                      @click="router.push({ name: ISSUES_ROUTES.ADD })"
                      flat
                      size="small"
                      color="primary"
                      >Create an issue</v-btn
                    >
                  </div>
                </div>
              </td>
              <td class="text-center">
                <v-icon size="small" @click="edit(item.id)" class="mr-2">
                  mdi-pencil
                </v-icon>
                <v-icon size="small" @click="view(item.id)" class="mr-2">
                  mdi-eye</v-icon
                >
                <v-icon size="small" @click="$emit('dialog', true)">
                  mdi-delete
                </v-icon>
              </td>
            </tr>
          </template>
        </v-data-table-server>
      </v-col>

      <v-col cols="2">
        <cs-list :dataHeader="[{ tag: 'Legends' }]">
          <template v-slot:dataList>
            <cs-list-row v-for="legend in dataLegends">
              <cs-list-item class="pt-1 pb-1">
                <v-icon class="mr-2" :color="legend.class"
                  >mdi-circle</v-icon
                >
                <span class="text-grey-darken-5">{{ legend.tag }}</span>
              </cs-list-item>
            </cs-list-row>
          </template>
        </cs-list>
      </v-col>
    </v-row>
  </v-container>
</template>
