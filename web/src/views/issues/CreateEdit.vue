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

let files = ref([]);

const save = () => {
  console.log("teste");
};

const cancel = () => {
  router.go(-1);
};
</script>

<template>
  <cs-header title="New Issue"></cs-header>

  <v-container class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card color="panel" rounded="0" elevation="0" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">Create new issue</span>
        </v-card>
        <v-card color="maingrey" rounded="0" elevation="0" class="pa-10">
          <v-form>
            <v-text-field
              density="compact"
              variant="outlined"
              name="issueName"
              label="Issue Name"
              id="id"
            ></v-text-field>
            <v-textarea
              density="compact"
              variant="outlined"
              name="issusDescription"
              label="Description"
              id="id"
            ></v-textarea>
            <v-row>
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  :items="users"
                  item-title="name"
                  item-value="id"
                  label="Assigned to"
                ></v-select>
              </v-col>
              <v-col>
                <v-file-input
                  v-model="files"
                  density="compact"
                  variant="outlined"
                  color="primary"
                  counter
                  label="File input"
                  multiple
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  :show-size="1000"
                >
                  <template v-slot:selection="{ fileNames }">
                    <template
                      v-for="(fileName, index) in fileNames"
                      :key="fileName"
                    >
                      <v-chip
                        v-if="index < 2"
                        color="primary"
                        label
                        size="small"
                        class="me-2"
                      >
                        {{ fileName }}
                      </v-chip>

                      <span
                        v-else-if="index === 2"
                        class="ml-2 text-black text-caption align-self-center"
                      >
                        +{{ files.length - 2 }} File(s)
                      </span>
                    </template>
                  </template>
                </v-file-input>
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
