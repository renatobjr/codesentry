<script setup>
// For development porpuse
const items = 8;

const listSignedIssues = () => {
  console.log("listSignedIssues");
};

</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="0" class="bg-maingrey">
      <v-expansion-panel-title>
        <cs-list-header
          title="Signed Issues"
          :action="listSignedIssues"
          :infoChips="{ partial: 8, total: 90}"
        />
      </v-expansion-panel-title>
      <div v-for="item in items" :key="item">
        <v-expansion-panel-text>
          <v-row align="center" justify="center">
            <v-col class="mr-4" cols="1">
              <v-avatar class="me-4" color="blue-grey" size="36"></v-avatar>
            </v-col>
            <v-col class="mr-n10" cols="2">
              <span class="d-block">00000</span>
              <v-icon class="solved-icon">mdi-square-rounded</v-icon>
              <v-icon color="orange" size="x-large">mdi-chevron-up</v-icon>
            </v-col>
            <v-col cols="3">
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
    </v-expansion-panel>
  </v-expansion-panels>
</template>
