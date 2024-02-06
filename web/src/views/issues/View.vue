<script lang="ts" setup>
// Only for demo purpose
import dataIssues from "@/data/issues";

import { ref } from "vue";
import { ISSUES_ROUTES } from "@/router/issues";
</script>

<template>
  <cs-header
    title="Issues"
    :actions="[{ title: 'Edit', route: ISSUES_ROUTES.EDIT }]"
  />

  <cs-view-issue />
</template>
