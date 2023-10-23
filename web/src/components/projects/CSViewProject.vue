<script setup>
// Only for demo purpose
import { dataProjects } from "@/data/projects";
import { dataHeader } from "@/data/issues";
import normalize from "@/utils/normalize";
import { ref, onBeforeMount } from "vue";
import router from "@/router";


let project = ref({});
let header = ref(dataHeader);

function getProject() {
  project.value = dataProjects.find(
    ({ id }) => id.toString() === router.currentRoute.value.params.id
  );
}

onBeforeMount(() => {
  getProject();
});

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
                <span class="text-caption">Created at {{ project.createdAt }}</span>
              </v-col>
              <v-col cols="10" align-self="center">
                <v-chip variant="flat" class="d-flex float-right mr-2" label color="database">{{ project.database }}</v-chip>
                <v-chip variant="flat" class="d-flex float-right mr-2" label color="language">{{ project.mainLanguage  }}</v-chip>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="bg-maingrey">
            <v-list class="bg-maingrey">
              <v-list-item>
                <v-avatar
                  size="30"
                  class="mr-2"
                  color="primary"
                  tile
                >
                  <span class="font-weight-bold">{{ normalize.setAvatar(project.admin )}}</span>
                </v-avatar>
                {{ project.admin }} | Admin
              </v-list-item>
              <v-list-item v-if="project.reporter">
                <v-avatar
                  size="30"
                  class="mr-2"
                  color="primary"
                  tile
                >
                  <span class="font-weight-bold">{{ normalize.setAvatar(project.reporter )}}</span>
                </v-avatar>
                {{ project.reporter }} | Admin
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cs-list-issues
          :header="header"
          :issues="project.trackedIssues"
          from="project"
        ></cs-list-issues>
      </v-col>
    </v-row>
  </v-container>
</template>
