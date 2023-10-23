<script setup>
import { dataHeader, dataIssues } from "@/data/issues";
import { ref } from "vue";

let project = ref({});
let header = ref(dataHeader);
</script>

<template>
  <v-container class="cs-container">
    <v-row>
      <v-col cols="3">
        <v-card rounded="1" class="pa-4">
          <v-card-title class="d-flex justify-center">
            <v-avatar
              size="128"
              color="primary"
            >
            <span style="font-size: 4rem;" class="font-weight-bold">JF</span>
            </v-avatar>
          </v-card-title>
          <v-card-text class="text-center mt-4">
            <span class="text-h4 d-block mb-2">James Franco</span>
            <span class="d-block">james.franco@exemple.com</span>
            <v-chip label variant="flat" class="mt-6" color="accent">Reporter</v-chip>
          </v-card-text>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Total Resolved Issues</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">25</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Total Assigned Issues</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">25</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Total Assigned Projects</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">2</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Last login</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">
                  2021-08-10 15:00:00
                </span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <cs-list-issues
        :header="header"
          :issues="dataIssues"
          from="project"
        ></cs-list-issues>
      </v-col>
    </v-row>
  </v-container>
</template>
