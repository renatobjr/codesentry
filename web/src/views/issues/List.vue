<script setup>
// Only for demo purpose
import { dataIssues, dataHeader } from "@/data/issues";

import { ref } from "vue";
import { ISSUES_ROUTES } from "@/router/issues";

const header = ref(dataHeader);
const issues = ref(dataIssues);

</script>

<template>
  <cs-header
    title="Issues"
    :actions="[{ title: 'New Issue', route: ISSUES_ROUTES.ADD }]"
  ></cs-header>

  <v-container fluid class="cs-container">
    <cs-list-issues :header="header" :issues="issues" ></cs-list-issues>
  </v-container>
</template>
