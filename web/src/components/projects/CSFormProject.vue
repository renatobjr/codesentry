<script setup>
// TODO: Only for development porpuses
import userData from '@/data/users';
import { languages, databases } from "@/data/dataProjects";

import { ref } from "vue";

defineProps({
  isEdit: Boolean,
});

const users = ref(userData.mock);
let selectedUsers = ref([]);
let selectedlanguages = ref([]);
let selectedDatabases = ref([]);
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card color="panel" rounded="0" elevation="1" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">{{
            isEdit ? "Edit Project" : "Create a new project"
          }}</span>
        </v-card>
        <v-card class="bg-maingrey pa-10" rounded="0" elevation="1">
          <v-form>
            <v-text-field
              density="compact"
              variant="outlined"
              name="projectName"
              label="Project Name"
            ></v-text-field>
            <v-text-field
              density="compact"
              variant="outlined"
              name="Description"
              label="Description"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  :items="users"
                  item-title="name"
                  item-value="id"
                  label="Admin"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="selectedUsers"
                  density="compact"
                  variant="outlined"
                  :items="users"
                  item-title="name"
                  item-value="id"
                  label="Reporters"
                  multiple
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip color="primary" label v-if="index < 2">
                      <span>{{ item.title }}</span>
                    </v-chip>

                    <span
                      v-if="index === 2"
                      class="ml-2 text-black text-caption align-self-center"
                    >
                      (+ {{ selectedUsers.length - 2 }} others)
                    </span>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="selectedUsers"
                  density="compact"
                  variant="outlined"
                  :items="users"
                  item-title="name"
                  item-value="id"
                  label="Assignees"
                  multiple
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip color="primary" label v-if="index < 2">
                      <span>{{ item.title }}</span>
                    </v-chip>

                    <span
                      v-if="index === 2"
                      class="ml-2 text-black text-caption align-self-center"
                    >
                      (+ {{ selectedUsers.length - 2 }} others)
                    </span>
                  </template>
                </v-select>
              </v-col>
            </v-row>
            <v-row class="mt-n5">
              <v-col>
                <v-select
                  v-model="selectedlanguages"
                  density="compact"
                  variant="outlined"
                  :items="languages"
                  item-title="name"
                  item-value="id"
                  label="Main languages"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="selectedDatabases"
                  density="compact"
                  variant="outlined"
                  :items="databases"
                  item-title="name"
                  item-value="id"
                  label="Database"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  @click="$emit('save')"
                  flat
                  class="mr-4"
                  color="primary"
                  >{{ isEdit ? "Save" : "Create" }}</v-btn
                >
                <v-btn @click="$emit('cancel')" flat color="warning"
                  >Cancel</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
