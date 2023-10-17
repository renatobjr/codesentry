<script setup>
import { ISSUES_ROUTES } from '@/router/issues';
</script>

<template>
  <cs-header
    title="Issues"
    :actions="[{ title: 'New Issue', route: ISSUES_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    oi
  </v-container>
</template>
