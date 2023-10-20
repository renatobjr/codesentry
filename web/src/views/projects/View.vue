<script setup>
// Only for demo purpose
import { dataProjects, dataHeader } from "@/data/projects";
import { dataLegends } from "@/data/legends";

import { PROJECT_ROUTES } from "@/router/projects";
import { ref, computed } from "vue";

const itemsPerPage = ref(2);
const header = ref(dataHeader);
const projects = ref(dataProjects);

let stackedValue = ref([]);

let stackedBar = (item) => {
  stackedValue = [];
  for (const grid of item) {
    stackedValue += `${grid.data}fr`;
  }

  return stackedValue.split("fr").join("fr ").trim();
};
</script>

<template>
  <cs-header
    title="Projects"
    :actions="[{ title: 'New Project', route: PROJECT_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    <v-row>
      <v-col cols="10">
        <v-data-table-server
          v-model:items-per-page="itemsPerPage"
          :headers="header"
          :items="projects"
          :items-length="projects.length"
          :loading="false"
          class="rounded bg-maingrey"
        >
          <!-- <template v-slot:headers="{ headers }">
            <tr>
              <th v-for="head in headers">{{ head.title }}</th>
            </tr>
          </template> -->
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.admin }}</td>
              <td>{{ item.projectName }}</td>
              <td>
                <div
                  id="issuesGraph"
                  :style="{
                    'grid-template-columns': `${stackedBar(
                      item.trackedIssues
                    )}`,
                  }"
                >
                  <div v-for="legend in item.trackedIssues">
                    <div :id="legend.class"></div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <v-icon size="small" class="mr-2"> mdi-pencil </v-icon>
                <v-icon size="small" class="mr-2"> mdi-eye</v-icon>
                <v-icon size="small"> mdi-delete </v-icon>
              </td>
            </tr>
          </template>
          <!-- <template v-slot:bottom>
            <div class="pa-3 bg-panel">
              <v-pagination v-model="page" :length="pageCount" density="compact" class="float-right" variant="tonal">

              </v-pagination>
            </div>
          </template> -->
        </v-data-table-server>
      </v-col>

      <v-col cols="2">
        <cs-list :dataHeader="[{ tag: 'Legends' }]">
          <template v-slot:dataList>
            <cs-list-row v-for="legend in dataLegends">
              <cs-list-item class="pt-1 pb-1">
                <v-icon class="mr-2" :class="`${legend.class}-icon`"
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
