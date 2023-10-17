<script setup></script>

<template>
  <!-- header -->
  <cs-header title="Dashboard"></cs-header>

  <v-container class="cs-container">
    <!-- Graphs -->
    <cs-graphics />

    <!-- Table -->

    <v-row justify-lg="space-between">
      <v-col lg="3" md="12" sm="12" xs="12" class="mb-4 col-datatable">
        <cs-unsigned-issues />
      </v-col>
      <v-col lg="3" md="12" sm="12" xs="12" class="mb-4 col-datatable">
        <cs-signed-issues />
      </v-col>
    </v-row>
  </v-container>
</template>
