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
        <cs-list-header
          title="Unsigned Issues"
          :action="listUnsignedIssues"
          :infoChips="{ partial: 8, total: 90}"
          infoColor="bg-red"
        />
      </v-expansion-panel-title>
      <div v-for="item in items" :key="item">
        <v-expansion-panel-text>
          <v-row align="center" justify="center">
            <v-col cols="2">
              <span class="d-block">00000</span>
              <v-icon id="open-icon">mdi-square-rounded</v-icon>
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
