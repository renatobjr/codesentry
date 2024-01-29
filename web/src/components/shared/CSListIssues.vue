<script setup>
import { ISSUES_ROUTES } from "@/router/issues";
import { PROJECTS_ROUTES } from "@/router/projects";
import { ref, onMounted } from "vue";
import { useDialogStore } from "@/store/dialog";
import { useIssueStore } from "@/store/issue";
import normalize from "@/utils/normalize";
import router from "@/router";

const props = defineProps({
  header: {
    type: Array,
    required: true,
  },
  query: {
    type: Object,
    required: true,
  },
  from: {
    type: String,
    required: false,
    default: "issues",
  },
});

const issueStore = useIssueStore();

const isLoaded = ref(true);
const issues = ref([]);
const header = ref(props.header);

const itemsPerPage = normalize.setItemsPerPage;
let totalIssues = 0;

const query = ref(props.query);

onMounted(async () => {
  await issueStore.listIssues(query.value);
  await loadIssues({ page: 1, itemsPerPage: 10, sortBy: [] });
});

const loadIssues = async ({ page, itemsPerPage, sortBy }) => {
  isLoaded.value = true;
  await issueStore
    .fetchIssues({ page, itemsPerPage, sortBy })
    .then(({ items, total }) => {
      issues.value = items;
      totalIssues = total;
    });
  isLoaded.value = false;
};

const edit = (id) => {
  props.from === "project"
    ? router.push({
        name: PROJECTS_ROUTES.EDIT_ISSUE,
        params: { idProject: query.value.projectId, id },
      })
    : router.push({ name: ISSUES_ROUTES.EDIT, params: { id } });
};

const view = (id) => {
  props.from === "project"
    ? router.push({
        name: PROJECTS_ROUTES.VIEW_ISSUE,
        params: { idProject: query.value.projectId, id },
      })
    : router.push({ name: ISSUES_ROUTES.VIEW, params: { id } });
};

const remove = async (id) => {
  const isConfirmed = await useDialogStore().openDialog({
    title: "Delete Issue",
    message: "Are you sure you want to delete this issue?",
  });

  if (!isConfirmed) return;

  await issueStore.deleteIssue(id).then( async () => {
    await issueStore.listIssues(query.value);
    loadIssues({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
  });
}
</script>

<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="header"
    item-value="name"
    :items="issues"
    :items-length="totalIssues"
    :loading="isLoaded"
    @update:options="loadIssues"
    class="rounded bg-maingrey elevation-1"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.resume }}</td>
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
          <v-icon :class="`${item.state}-icon mr-2`">mdi-square-rounded</v-icon>
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
        <td>{{ normalize.formatDate(item.createdAt) }}</td>
        <td>{{ normalize.formatDate(item.updatedAt) }}</td>
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
          <v-icon size="small" class="mr-2" @click="edit(item._id)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" class="mr-2" @click="view(item._id)">
            mdi-eye</v-icon
          >
          <v-icon size="small" @click="remove(item._id)"> mdi-delete </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
