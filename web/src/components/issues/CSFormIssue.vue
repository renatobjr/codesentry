<script setup>
// TODO: Only for development porpuses
import userData from "@/data/users";
import { priority, reproducibility, states } from "@/data/dataProjects";
import { dataIssues } from "@/data/issues";

import { ref } from "vue";

let files = ref([]);

const users = ref(userData.mock);
const selectedPriority = ref(priority);
const selectedReproducibility = ref(reproducibility);
const selectedState = ref(states);
const selectedIssue = ref(dataIssues);

defineProps({
  isEdit: Boolean,
});
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card color="panel" rounded="0" elevation="1" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">{{
            isEdit ? "Edit Issue" : "Create new issue"
          }}</span>
        </v-card>
        <v-card color="maingrey" rounded="0" elevation="1" class="pa-10">
          <v-form>
            <v-row>
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  :items="selectedPriority"
                  item-title="name"
                  item-value="id"
                  label="Priority"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  :items="selectedReproducibility"
                  item-title="name"
                  item-value="id"
                  label="Reproducibility"
                ></v-select>
              </v-col>
            </v-row>
            <v-row v-if="isEdit" class="mt-n6">
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  :items="selectedState"
                  item-title="name"
                  item-value="id"
                  label="State"
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props">
                      <template v-slot:prepend>
                        <v-icon :color="item.raw.class"
                          >mdi-square-rounded</v-icon
                        >
                      </template>
                    </v-list-item>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-select
                  density="compact"
                  variant="outlined"
                  :items="selectedIssue"
                  item-title="resume"
                  item-value="id"
                  label="Relataed to"
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props" :tilte="item.raw.resume">
                      <template v-slot:prepend>
                        <v-icon :color="item.raw.state"
                          >mdi-square-rounded</v-icon
                        >
                      </template>
                    </v-list-item>
                  </template>
                </v-select>
              </v-col>
            </v-row>
            <v-text-field
              density="compact"
              variant="outlined"
              name="resume"
              label="Resume"
            ></v-text-field>
            <v-textarea
              density="compact"
              variant="outlined"
              name="issusDescription"
              label="Description"
            ></v-textarea>
            <v-textarea
              density="compact"
              variant="outlined"
              name="stepsToReproduce"
              label="Steps to reproduce"
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
            <v-card v-if="isEdit" variant="outlined" class="mb-6" elevation="0" roudedn-lg>
              <v-row align="start" class="pa-4">
                <v-col cols="1" align-self="center">
                  <v-avatar
                    color="primary"
                    size="32"
                    class="font-weight-bold mr-2"
                  >
                    JF
                  </v-avatar>
                </v-col>
                <v-col cols="1" align-self="center" class="ml-n16">
                  <span class="d-block">James Franco</span>
                  <span class="text-caption">Posted in 21/09/2000</span>
                </v-col>
                <v-col cols="9" align-self="center">
                  <span>Lorem ipsum</span>
                </v-col>
              </v-row>
              <!-- <div v-for="note in issue.notes">
                <v-row align="start" class="pa-4">
                  <v-col cols="1" align-self="center">
                    <v-avatar color="primary" size="32" class="font-weight-bold mr-2">
                      {{ normalize.setAvatar(issue.assignedTo) }}
                    </v-avatar>
                  </v-col>
                  <v-col cols="1" align-self="center" class="ml-n16">
                    <span class="d-block">{{ issue.assignedTo }}</span>
                    <span  class="text-caption">Posted in 21/09/2000</span>
                  </v-col>
                  <v-col cols="9" align-self="center">
                    <span >{{ note.content }}</span>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </div> -->
            </v-card>
            <v-textarea
              v-if="isEdit"
              density="compact"
              variant="outlined"
              name="note"
              label="Add Note"
            ></v-textarea>
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
