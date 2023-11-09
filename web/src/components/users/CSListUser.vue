<script setup>
import { ref, onMounted } from "vue";
import { useDialogStore } from "@/store/dialog";
import { USERS_ROUTES } from "@/router/users";
import { useUserStore } from "@/store/user";
import normalize from "@/utils/normalize";
import router from "@/router";
import userData from "@/data/users";

const userStore = useUserStore();

const isLoaded = ref(true);
const users = ref([]);
const header = ref([userData.header]);

const itemsPerPage = normalize.setItemsPerPage;
let totalUsers = 0;

onMounted(async () => {
  await userStore.listUsers();
  await loadUsers({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
});

const loadUsers = async ({ page, itemsPerPage, sortBy }) => {
  isLoaded.value = true;
  await userStore
    .fetchUsers({ page, itemsPerPage, sortBy })
    .then(({ items, total }) => {
      users.value = items;
      totalUsers = total;
    });
  isLoaded.value = false;
};

const countUserPending = () => {
  return users.value.filter(
    (user) => user.status == userData.status.WAITING_APPROVAL
  ).length;
};

const edit = (id) => {
  router.push({ name: USERS_ROUTES.EDIT, params: { id } });
};

const view = (id) => {
  router.push({ name: USERS_ROUTES.VIEW, params: { id } });
};

const remove = async (id) => {
  const isConfirmed = await useDialogStore().openDialog({
    title: "Delete User",
    message: "Are you sure you want to delete this user?",
  });

  if (!isConfirmed) return;

  await userStore.deleteUser(id).then( async () => {
    await userStore.listUsers();
    loadUsers({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
  });
};

const approve = async (id) => {
  const isConfirmed = await useDialogStore().openDialog({
    title: "Approve User",
    message: "Are you sure you want to approve this user?",
  });

  if (!isConfirmed) return;

  await userStore.approveUser(id).then( async () => {
    await userStore.listUsers();
    loadUsers({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
  });
};
</script>

<template>
  <v-banner
    v-if="countUserPending() > 0"
    lines="one"
    icon="mdi-alert-box"
    color="warning"
    elevation="1"
  >
    <v-banner-text>
      You have <strong>{{ countUserPending() }}</strong> pending user to
      approve.
    </v-banner-text>
  </v-banner>

  <v-container fluid class="cs-container">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="header"
      :items-length="totalUsers"
      :items="users"
      :loading="isLoaded"
      item-value="name"
      class="rounded bg-maingrey elevation-1"
      @update:options="loadUsers"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-avatar color="primary" size="36" class="mr-4 font-weight-bold">{{
              normalize.setAvatar(item.name)
            }}</v-avatar>
            <span>{{ item.name }}</span>
          </td>
          <td>
            <v-chip
              class="text-capitalize"
              variant="flat"
              label
              :color="normalize.setUserStatus(item.status)"
            >
              {{ item.status }}
            </v-chip>
          </td>
          <td>
            <span>{{ item.email }}</span>
          </td>
          <td>
            <span class="text-capitalize">{{ item.role }}</span>
          </td>
          <td>
            <v-chip variant="flat" label color="solved">
              {{ item.issues.resolvedIssues.length }}</v-chip
            >
          </td>
          <td>
            <v-chip variant="flat" label color="open">{{
              item.issues.assignedTo.length
            }}</v-chip>
          </td>
          <td>
            <v-chip variant="flat" label color="primary">{{
              item.projects.length
            }}</v-chip>
          </td>
          <td class="text-center">
            <v-icon @click="edit(item._id)" size="small" class="mr-2">
              mdi-pencil
            </v-icon>
            <v-icon @click="view(item._id)" size="small" class="mr-2">
              mdi-eye</v-icon
            >
            <v-icon @click="remove(item._id)" size="small" class="mr-2">
              mdi-delete
            </v-icon>
            <!-- Icons loop -->
            <v-icon
              v-if="item.status == userData.status.WAITING_REGISTER"
              color="grey"
              >mdi-account-check</v-icon
            >
            <v-icon
              @click="approve(item._id)"
              v-else-if="item.status == userData.status.WAITING_APPROVAL"
              >mdi-account-check</v-icon
            >
            <v-icon v-else>mdi-email</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table-server>
  </v-container>
</template>
