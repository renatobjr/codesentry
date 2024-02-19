<script lang="ts" setup>
import dataIssues from "@/data/issues";
import { ref, onMounted } from "vue";
import { useProjectStore } from "@/store/project";
import { storeToRefs } from "pinia";
import normalize from "@/utils/normalize";
import router from "@/router";

const projectStore = useProjectStore();
const { project } = storeToRefs(projectStore);

onMounted(async () => {
  await getProject();
});

const getProject = async () => {
  await projectStore.fetchProject(router.currentRoute.value.params.id);
};

let header = ref(dataIssues.header);
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row>
      <v-col cols="4">
        <v-card elevation="1" rounded-lg>
          <v-card-title class="bg-primary">
            <v-row>
              <v-col cols="2" align-self="center">
                <span class="d-block text-h6">{{ project.name }}</span>
                <span class="text-caption"
                  >Created at
                  {{ normalize.formatDate(project.createdAt) }}</span
                >
              </v-col>
              <v-col cols="10" align-self="center">
                <v-chip
                  variant="flat"
                  class="d-flex float-right mr-2"
                  label
                  color="database"
                  >{{ project.mainDatabase }}</v-chip
                >
                <v-chip
                  variant="flat"
                  class="d-flex float-right mr-2"
                  label
                  color="language"
                  >{{ project.mainLanguage }}</v-chip
                >
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="bg-maingrey">
            <v-list class="bg-maingrey">
              <v-list-item>
                <v-avatar size="30" class="mr-2" color="primary" tile>
                  <span class="font-weight-bold">{{
                    normalize.setAvatar(project.admin.name)
                  }}</span>
                </v-avatar>
                {{ project.admin.name }} | Admin
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item
                v-if="project.reporters"
                v-for="reporter in project.reporters"
              >
                <div>
                  <v-avatar size="30" class="mr-2" color="primary" tile>
                    <span class="font-weight-bold">{{
                      normalize.setAvatar(reporter.name)
                    }}</span>
                  </v-avatar>
                  {{ reporter.name }} | Reporters
                </div>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8"> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cs-list-issues
          :header="header"
          :query="{ projectId: router.currentRoute.value.params.id }"
          from="project"
        ></cs-list-issues>
      </v-col>
    </v-row>
  </v-container>
</template>
