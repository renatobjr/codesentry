<script lang="ts" setup>
// Only for demo purpose
// import { unsignedIssues, signedIssues } from '@/data/issues';
</script>

<template>
  <!-- header -->
  <cs-header title="Dashboard" />

  <v-container fluid class="cs-container">
    <!-- Graphs -->
    <cs-graphics />

    <!-- Table -->
    <!--
    <v-row justify-lg="space-between">
      <v-col lg="3" md="12" sm="12" xs="12" class="mb-4 col-datatable">
        <cs-unsigned-issues :issues="unsignedIssues"/>
      </v-col>
      <v-col lg="3" md="12" sm="12" xs="12" class="mb-4 col-datatable">
        <cs-signed-issues :issues="signedIssues"/>
      </v-col>
    </v-row> -->
  </v-container>
</template>
