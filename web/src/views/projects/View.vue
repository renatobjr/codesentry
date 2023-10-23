<script setup>
import { PROJECT_ROUTES } from "@/router/projects";

</script>

<template>
  <cs-header
    title="Project Name"
    :actions="[{ title: 'Edit', route: PROJECT_ROUTES.EDIT }]"
  ></cs-header>

  <cs-view-project></cs-view-project>

</template>
