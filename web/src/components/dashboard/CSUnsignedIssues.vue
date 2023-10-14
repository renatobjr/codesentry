<script setup>
// For development porpuse
const items = 8;

const listUnsignedIssues = () => {
  console.log("listUnsignedIssues");
};
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="0">
      <v-expansion-panel-title>
        <v-row>
          <v-col>
            <span class="text-h6 mr-8 font-weight-light">Unsigned Issues</span>
            <v-chip label class="bg-red">8/90</v-chip>
            <v-btn
              class="float-right mr-8"
              flat
              color="primary"
              @click.native.stop="listUnsignedIssues"
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
</template>
