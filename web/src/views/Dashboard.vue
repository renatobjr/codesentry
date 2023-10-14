<script setup>
const items = 8;
</script>

<template>
  <!-- header -->
  <cs-header
    title="Dashboard"
  ></cs-header>

  <!-- Graphs -->
  <v-row justify-lg="space-between">
    <v-col lg="3" md="12" sm="12" xs="12" class="cs-graph col-graph"
      >Graph1</v-col
    >
    <v-col lg="3" md="12" sm="12" xs="12" class="cs-graph col-graph"
      >Graph1</v-col
    >
    <v-col lg="3" md="12" sm="12" xs="12" class="cs-graph col-graph"
      >Graph1</v-col
    >
  </v-row>

  <!-- Table -->
  <v-row justify-lg="space-between">
    <v-col lg="3" md="12" sm="12" xs="12" class="mb-4 col-datatable">
      <v-expansion-panels>
        <v-expansion-panel elevation="0">
          <v-expansion-panel-title>
            <v-row>
              <v-col>
                <span class="text-h6 mr-8 font-weight-light"
                  >Unsignned Issues</span
                >
                <v-chip label class="bg-red">8/90</v-chip>
                <v-btn class="float-right mr-8" flat color="primary"
                  >see all</v-btn
                >
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <div v-for="item in items" :key="item">
            <v-expansion-panel-text>
              <v-row align="center" justify="center">
                <v-col cols="2">
                  <span class="d-block">00000</span>
                  <v-icon color="red">mdi-square-rounded</v-icon>
                  <v-icon color="orange" size="x-large">mdi-chevron-up</v-icon>
                </v-col>
                <v-col cols="3">
                  <span class="d-block">Issue Title</span>
                  <span>Project Name</span>
                </v-col>
                <v-col>
                  <span class="d-block">Issue Description</span>
                  <span>Created date</span>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
            <v-divider></v-divider>
          </div>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col lg="3" md="12" sm="12" xs="12" class="mb-4 col-datatable">
      <v-expansion-panels>
        <v-expansion-panel elevation="0">
          <v-expansion-panel-title>
            <v-row>
              <v-col>
                <span class="text-h6 mr-8 font-weight-light"
                  >Signned Issues</span
                >
                <v-chip label class="bg-green">8/90</v-chip>
                <v-btn class="float-right mr-8" flat color="primary"
                  >see all</v-btn
                >
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <div v-for="item in items" :key="item">
            <v-expansion-panel-text>
              <v-row align="center" justify="center">
                <v-col class="mr-4" cols="1">
                  <v-avatar class="me-4" color="blue-grey" size="36"></v-avatar>
                </v-col>
                <v-col class="mr-n10" cols="2">
                  <span class="d-block">00000</span>
                  <v-icon color="red">mdi-square-rounded</v-icon>
                  <v-icon color="orange" size="x-large">mdi-chevron-up</v-icon>
                </v-col>
                <v-col cols="2">
                  <span class="d-block">Issue Title</span>
                  <span>Asinnged at</span>
                </v-col>
                <v-col>
                  <span class="d-block">Issue Description</span>
                  <span>Modified at</span>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
            <v-divider></v-divider>
          </div>
          <v-divider></v-divider>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
