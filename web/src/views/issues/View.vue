<script setup>
// Only for demo purpose
import { dataIssues, dataHeader } from "@/data/issues";

import { ref } from "vue";
import { ISSUES_ROUTES } from "@/router/issues";

const itemsPerPage = ref(5);
const header = ref(dataHeader);
const issues = ref(dataIssues);

function workingDays(createdAt, updatedAt) {
  const created = new Date(createdAt);
  const updated = new Date(updatedAt);

  const diffTime = Math.abs(updated - created);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
</script>

<template>
  <cs-header
    title="Issues"
    :actions="[{ title: 'New Issue', route: ISSUES_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="header"
      :items="issues"
      :items-length="issues.length"
      item-value="name"
      class="rounded bg-maingrey"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.priority }}</td>
          <td>
            <v-icon :class="`${ item.state }-icon`">mdi-square-rounded</v-icon>
            <span>{{ item.state }}</span>
          </td>
          <td class="text-center">{{ item.attechedFiles.length }}</td>
          <td class="text-center">{{ item.notes.length }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.updatedAt }}</td>
          <td><v-chip label color="secundary">{{ workingDays(item.createdAt, item.updatedAt) }} days</v-chip></td>
          <td>{{ item.description }}</td>
          <td class="text-center">
            <v-icon size="small" class="mr-2"> mdi-pencil </v-icon>
            <v-icon size="small" class="mr-2"> mdi-eye</v-icon>
            <v-icon size="small"> mdi-delete </v-icon>
          </td>
          <!-- <td>
            <v-icon :color="item.status">mdi-square-rounded</v-icon>
            <v-icon :color="item.priority">mdi-chevron-up</v-icon>
          </td>
          <td>
            <span class="d-block">{{ item.issue }}</span>
            <span>Created at {{ item.createdAt}}</span>

            </td>
          <td>{{ item.description }}</td>
          <td class="text-center">
            <v-icon size="small" class="mr-2"> mdi-pencil </v-icon>
            <v-icon size="small" class="mr-2"> mdi-eye</v-icon>
            <v-icon size="small"> mdi-delete </v-icon>
          </td> -->
        </tr>
      </template>
    </v-data-table-server>
  </v-container>
</template>
