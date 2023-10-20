<script setup>
// Only for demo purpose
import { dataUsers, dataHeader } from "@/data/users";

import { ref } from "vue";
import { USERS_ROUTES } from "@/router/users";

const itemsPerPage = ref(10);
const header = ref(dataHeader);
const users = ref(dataUsers);
</script>

<template>
  <cs-header
    title="Users"
    :actions="[{ title: 'New user', route: USERS_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="header"
      :items="users"
      :items-length="users.length"
      :loading="false"
      class="rounded bg-maingrey"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-avatar color="blue-grey" size="36" class="mr-4"></v-avatar>
            <span>{{ item.name }}</span>
          </td>
          <td>
            <span>{{ item.email }}</span>
          </td>
          <td>
            <v-chip label>{{ item.resolvedIssues }}</v-chip>
          </td>
          <td>
            <v-chip label>{{ item.projectsAssigned }}</v-chip>
          </td>
          <td class="text-center">
            <v-icon size="small" class="mr-2"> mdi-pencil </v-icon>
            <v-icon size="small" class="mr-2"> mdi-eye</v-icon>
            <v-icon size="small"> mdi-delete </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table-server>
    <!-- <cs-list :dataHeader="dataHeader">
      <template v-slot:dataList>
        <cs-list-row v-for="(user, index) in dataUsers">
          <cs-list-item :cols="3">
            <v-avatar color="blue-grey" size="36"></v-avatar>
          </cs-list-item>

          <cs-list-item :cols="3">
            <span class="d-block" v-for="project in user.projects">{{
              project.name
            }}</span>
          </cs-list-item>

          <cs-list-item :cols="3">
            <div v-for="issue in user.assignedIssues">
              <span class="mr-2"
                ><v-icon :color="issue.status">mdi-square-rounded</v-icon></span
              >
              <span class="mr-2">{{ issue.priority }}</span>
              <span>{{ issue.name }}</span>
            </div>
          </cs-list-item>

          <cs-list-item :cols="3">
            <v-icon color="primary" class="mr-4">mdi-pencil</v-icon>
            <v-icon color="primary" class="mr-4">mdi-eye</v-icon>
            <v-icon color="primary" class="mr-4">mdi-delete</v-icon>
          </cs-list-item>
        </cs-list-row>
      </template>
    </cs-list> -->
  </v-container>
</template>
