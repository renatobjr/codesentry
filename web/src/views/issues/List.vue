<script lang="ts" setup>
import dataIssues from "@/data/issues";
import { ref } from "vue";
import { ISSUES_ROUTES } from "@/router/issues";

const header = ref(dataIssues.header);
</script>

<template>
  <cs-header
    title="Issues"
    :actions="[{ title: 'New Issue', route: ISSUES_ROUTES.ADD }]"
  />
  <v-container fluid class="cs-container">
    <cs-list-issues :header="header" :query="{}" />
  </v-container>
</template>
