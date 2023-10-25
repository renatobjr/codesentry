<script setup>
import { PROJECT_ROUTES } from "@/router/projects";
import { ref } from "vue";



let dialog = ref(false);

</script>

<template>
  <cs-header
    title="Aloha"
    :actions="[{ title: 'New Project', route: PROJECT_ROUTES.ADD }]"
  ></cs-header>

  <!-- TODO: needing to be moved to a store -->
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card>
      <v-card-title class="headline bg-primary">Dialog exemple</v-card-title>
      <v-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="dialog = false">Accept</v-btn>
        <v-btn color="warning" @click="dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <cs-list-project
    @dialog="dialog = true"
  ></cs-list-project>
</template>
