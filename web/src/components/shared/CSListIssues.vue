<script setup>
import { ref, onMounted } from "vue";
import normalize from "@/utils/normalize";
import router from "@/router";
import { ISSUES_ROUTES } from "@/router/issues";
import { PROJECTS_ROUTES } from "@/router/projects";
import { useIssueStore } from "@/store/issue";
import { storeToRefs } from "pinia";

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
const { issuesList, isLoaded, totalIssues } = storeToRefs(issueStore);

const query = ref(props.query);

const issues = ref([]);
const itemsPerPage = ref(normalize.setItemsPerPage);
const header = ref(props.header);

onMounted(async () => {
  await issueStore.listIssues(query.value)
  await loadIssues({ page: 1, itemsPerPage: 10, sortBy: [] });
});

const loadIssues = async ({ page, itemsPerPage, sortBy }) => {
   await issueStore.fetchIssues({ page, itemsPerPage, sortBy }).then(() => {
    issues.value = issuesList.value;
   });
}

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
          <v-icon size="small" class="mr-2" @click="edit(item.id)"> mdi-pencil </v-icon>
          <v-icon size="small" class="mr-2" @click="view(item.id)"> mdi-eye</v-icon>
          <v-icon size="small"> mdi-delete </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
