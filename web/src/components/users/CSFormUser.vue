<script setup>
// Only for demo purpose
import { dataProjects } from "@/data/projects";

import { ref } from "vue";

defineProps({
  isEdit: Boolean,
});
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card color="panel" rounded="0" elevation="1" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">
            {{ isEdit ? "Edit user" : "Create a new user" }}
          </span>
        </v-card>
        <v-card class="bg-maingrey pa-10" rounded="0" elevation="1">
          <form action="">
            <v-row>
              <v-col>
                <v-text-field
                  density="compact"
                  variant="outlined"
                  name="name"
                  label="Name"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  density="compact"
                  variant="outlined"
                  name="email"
                  label="Email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-n5">
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  label="Role"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  label="Project"
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
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
