<script setup>
import { PROJECTS_ROUTES } from "@/router/projects";

</script>

<template>
  <cs-header
    title="Project Name"
    :actions="[{ title: 'Edit', route: PROJECTS_ROUTES.EDIT }]"
  ></cs-header>

  <cs-view-project></cs-view-project>

</template>
