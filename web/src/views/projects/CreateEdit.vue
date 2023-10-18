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

const languages = [
    {"id": 1, "name": "JavaScript"},
    {"id": 2, "name": "Python"},
    {"id": 3, "name": "Java"},
    {"id": 4, "name": "C#"},
    {"id": 5, "name": "C++"},
    {"id": 6, "name": "TypeScript"},
    {"id": 7, "name": "PHP"},
    {"id": 8, "name": "Swift"},
    {"id": 9, "name": "Kotlin"},
    {"id": 10, "name": "Go (Golang)"},
    {"id": 11, "name": "Ruby"},
    {"id": 12, "name": "Rust"},
    {"id": 13, "name": "Shell Script (Bash)"},
    {"id": 14, "name": "R"},
    {"id": 15, "name": "Objective-C"}
  ]

const databases = [
    {"id": 1, "name": "MongoDB"},
    {"id": 2, "name": "MySQL"},
    {"id": 3, "name": "PostgreSQL"},
    {"id": 4, "name": "SQLite"},
    {"id": 5, "name": "Microsoft SQL Server"},
    {"id": 6, "name": "Oracle Database"},
    {"id": 7, "name": "Firebase"},
    {"id": 8, "name": "Cassandra"},
    {"id": 9, "name": "Redis"},
    {"id": 10, "name": "DynamoDB"},
    {"id": 11, "name": "Neo4j"},
    {"id": 12, "name": "CouchDB"},
    {"id": 13, "name": "RethinkDB"},
    {"id": 14, "name": "MariaDB"},
    {"id": 15, "name": "Elasticsearch"}
  ]

let selectedUsers = ref([]);
let selectedlanguages = ref([]);
let selectedDatabases = ref([]);

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
        <v-card color="panel" rounded="0" elevation="0" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">Create new project</span>
        </v-card>
        <v-card class="bg-maingrey pa-10" rounded="0" elevation="0">
          <v-form>
            <v-text-field
              density="compact"
              variant="outlined"
              name="projectName"
              label="Project Name"
              id="id"
            ></v-text-field>
            <v-text-field
              density="compact"
              variant="outlined"
              name="Description"
              label="Description"
              id="id"
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
              multiple
            >
              <template v-slot:selection="{ item, index }">
                <v-chip color="primary" label>
                  <span>{{ item.title }}</span>
                </v-chip>
              </template>
            </v-select>
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
              multiple
            >
              <template v-slot:selection="{ item, index }">
                <v-chip color="primary" label>
                  <span>{{ item.title }}</span>
                </v-chip>
              </template>
            </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn @click="save" flat class="mr-4" color="primary"
                  >Save</v-btn
                >
                <v-btn @click="cancel" flat color="secundary">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
