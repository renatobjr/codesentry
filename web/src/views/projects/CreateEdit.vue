<script setup>
import router from "@/router";
import { ref } from "vue";

// @TODO: Only for development porpuses
const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
  },
];

let selectedUsers = ref([]);

const save = () => {
  console.log("teste");
};

const cancel = () => {
  router.go(-1);
};
</script>

<template>
  <cs-header title="New Project"></cs-header>

  <v-container class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card
          color="primary"
          rounded="0"
          elevation="0"
          class="cs-header-form"
        >
          <span class="text-h5">Create new project</span>
        </v-card>
        <v-card class="bg-maingrey pa-10" rounded="0" elevation="0">
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                  density="compact"
                  variant="outlined"
                  name="projectName"
                  label="Project Name"
                  id="id"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  density="compact"
                  variant="outlined"
                  name="Description"
                  label="Description"
                  id="id"
                ></v-text-field>
              </v-col>
            </v-row>
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
                  label="Permited Users"
                  multiple
                >
                  <template
                    v-slot:selection="{ item, index }"
                  >
                    <v-chip color="primary" label v-if="index < 2">
                      <span>{{ item.title }}</span>
                    </v-chip>

                    <span
                      v-if="index === 2"
                      class="text-primary text-caption align-self-center"
                    >
                      (+ {{ selectedUsers.length - 2}} others)
                    </span>
                  </template>
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn @click="save" flat class="mr-4" color="primary"
                  >Save</v-btn
                >
                <v-btn @click="cancel" flat color="secondary">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
