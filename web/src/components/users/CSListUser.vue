<script setup>
// Only for demo purpose
import { dataUsers, dataHeader } from "@/data/users";

import normalize from "@/utils/normalize";
import { ref } from "vue";
import { USERS_ROUTES } from "@/router/users";
import router from "@/router";

const itemsPerPage = ref(normalize.setItemsPerPage);
const header = ref(dataHeader);
const users = ref(dataUsers);

const edit = (id) => {
  router.push({ name: USERS_ROUTES.EDIT, params: { id } });
};

const view = (id) => {
  router.push({ name: USERS_ROUTES.VIEW, params: { id } });
};
</script>

<template>
  <v-container fluid class="cs-container">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="header"
      :items="users"
      :items-length="users.length"
      :loading="false"
      class="rounded bg-maingrey elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-avatar color="blue-grey" size="36" class="mr-4 font-weight-bold">{{ normalize.setAvatar(item.name) }}</v-avatar>
            <span>{{ item.name }}</span>
          </td>
          <td>
            <span>{{ item.email }}</span>
          </td>
          <td>
            <v-chip variant="flat" label color="solved">{{ item.resolvedIssues }}</v-chip>
          </td>
          <td>
            <v-chip variant="flat" label color="open">20</v-chip>
          </td>
          <td>
            <v-chip variant="flat" label color="primary">{{ item.projectsAssigned }}</v-chip>
          </td>
          <td class="text-center">
            <v-icon @click="edit(item.id)" size="small" class="mr-2"> mdi-pencil </v-icon>
            <v-icon @click="view(item.id)" size="small" class="mr-2"> mdi-eye</v-icon>
            <v-icon size="small"> mdi-delete </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table-server>
  </v-container>
</template>
