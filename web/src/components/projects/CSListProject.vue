<script setup>
import { dataLegends } from "@/data/legends";
import { ISSUES_ROUTES } from "@/router/issues";
import { PROJECTS_ROUTES } from "@/router/projects";
import { ref, onMounted } from "vue";
import { useDialogStore } from "@/store/dialog";
import { useProjectStore } from "@/store/project";
import normalize from "@/utils/normalize";
import projectData from "@/data/projects";
import router from "@/router";

const projectStore = useProjectStore();

const isLoaded = ref(true);
const projects = ref([]);
const header = ref([projectData.header]);

let stackedValue = ref([]);
let dataFormated = ref([]);

const itemsPerPage = normalize.setItemsPerPage;
let totalProjects = 0;

onMounted(async () => {
  await projectStore.listProjects();
  await loadProjects({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
});

const loadProjects = async ({ page, itemsPerPage, sortBy }) => {
  isLoaded.value = true;
  await projectStore.fetchProjects({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
    projects.value = items;
    totalProjects = total;
  });
  isLoaded.value = false;
}

const edit = (id) => {
  router.push({ name: PROJECTS_ROUTES.EDIT, params: { id } });
};

const view = (id) => {
  router.push({ name: PROJECTS_ROUTES.VIEW, params: { id } });
};

const remove = async (id) => {
  const isConfirmed = await useDialogStore().openDialog({
    title: "Delete Project",
    message: "Are you sure you want to delete this project?",
  });

  if (!isConfirmed) return;

  await projectStore.deleteProject(id).then( async () => {
    await projectStore.listProjects();
    loadProjects({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
  });
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
          item-value="name"
          :items="projects"
          :items-length="totalProjects"
          :loading="isLoaded"
          @update:options="loadProjects"
          class="rounded elevation-1"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.admin }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.issues.length }}</td>
              <td>
                <div
                  id="issuesGraph"
                  :style="{
                    'grid-template-columns': `${stackedBar(
                      item.issues
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
                <v-icon size="small" @click="edit(item._id)" class="mr-2">
                  mdi-pencil
                </v-icon>
                <v-icon size="small" @click="view(item._id)" class="mr-2">
                  mdi-eye</v-icon
                >
                <v-icon size="small" @click="remove(item._id)">
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
