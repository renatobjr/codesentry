<script setup>
import { ref } from "vue";
import normalize from "@/utils/normalize";
import router from "@/router";
import { ISSUES_ROUTES } from "@/router/issues";
import { PROJECTS_ROUTES } from "@/router/projects";

const props = defineProps({
  header: {
    type: Array,
    required: true,
  },
  issues: {
    type: Array,
    required: true,
  },
  from: {
    type: String,
    required: false,
    default: "issues",
  },
});

const idProject = ref(router.currentRoute.value.params.id);

const edit = (id) => {
  props.from === "project"
    ? router.push({ name: PROJECTS_ROUTES.EDIT_ISSUE, params: { idProject: idProject.value, id } })
    : router.push({ name: ISSUES_ROUTES.EDIT, params: { id } });
};

const view = (id) => {
  props.from === "project"
    ? router.push({ name: PROJECTS_ROUTES.VIEW_ISSUE, params: { idProject: idProject.value, id } })
    : router.push({ name: ISSUES_ROUTES.VIEW, params: { id } });
};

const itemsPerPage = ref(10);
</script>

<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="header"
    :items="issues"
    :items-length="issues.length"
    item-value="name"
    class="rounded bg-maingrey elevation-1"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.id }}</td>
        <td>
          <v-icon
            style="margin-left: -1.5px"
            class="d-block"
            size="large"
            :color="normalize.setPriorityIcons(item.priority).color"
            >{{ normalize.setPriorityIcons(item.priority).icon }}</v-icon
          >
        </td>
        <td>
          <v-icon :class="`${item.state}-icon`">mdi-square-rounded</v-icon>
          <span class="text-capitalize">{{
            normalize.formatTags(item.state)
          }}</span>
        </td>
        <td class="text-center">
          {{ item.attachedFiles.length }}
        </td>
        <td class="text-center">
          {{ item.notes.length }}
        </td>
        <td>{{ item.createdAt }}</td>
        <td>{{ item.updatedAt }}</td>
        <td>
          <v-chip label color="primary"
            >{{
              normalize.setWorkingDays(item.createdAt, item.updatedAt)
            }}
            days</v-chip
          >
        </td>
        <td>{{ item.description }}</td>
        <td class="text-center">
          <v-icon size="small" class="mr-2" @click="edit(item.id)"> mdi-pencil </v-icon>
          <v-icon size="small" class="mr-2" @click="view(item.id)"> mdi-eye</v-icon>
          <v-icon size="small"> mdi-delete </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
