<script setup>
import { PROJECTS_ROUTES } from "@/router/projects";
import { ref } from "vue";

</script>

<template>
  <cs-header
    title="Aloha"
    :actions="[{ title: 'New Project', route: PROJECTS_ROUTES.ADD }]"
  ></cs-header>

  <cs-list-project />
</template>
