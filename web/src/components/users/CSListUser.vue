<script setup>
import { useUserStore } from "@/store/user";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { USERS_ROUTES } from "@/router/users";
import { useDialogStore } from "@/store/dialog";
import normalize from "@/utils/normalize";
import router from "@/router";
import userData from "@/data/users";

const userStore = useUserStore();
const { userList, isLoaded, totalUsers } = storeToRefs(userStore);

const users = ref([]);
const itemsPerPage = ref(normalize.setItemsPerPage);
const header = ref([userData.header]);


onMounted(async () => {
  await loadUsers({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
});

const loadUsers = async ({ page, itemsPerPage, sortBy }) => {
  // TODO: need to fix sorting
  await userStore.fetchUsers({ page, itemsPerPage, sortBy }).then(() => {
    users.value = userList.value;
  });
};

const countUserPending = () => {
  return users.value.filter((user) => user.status == userData.status.PENDING).length;
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

  await userStore.deleteUser(id).then(() => {
    loadUsers({ page: 1, itemsPerPage: itemsPerPage, sortBy: [] });
  });
};

const approve = async (id) => {
  const isConfirmed = await useDialogStore().openDialog({
    title: "Approve User",
    message: "Are you sure you want to approve this user?",
  });

  if (!isConfirmed) return;

  await userStore.approveUser(id).then(() => {
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
      You have <strong>{{ countUserPending() }}</strong> pending user to approve.
    </v-banner-text>
  </v-banner>

  <v-container fluid class="cs-container">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="header"
      :items="users"
      :items-length="totalUsers"
      item-value="name"
      :loading="isLoaded"
      @update:options="loadUsers"
      class="rounded bg-maingrey elevation-1"
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
            <v-chip class="text-capitalize" variant="flat" label :color="normalize.setUserStatus(item.status)">
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
            <v-chip variant="flat" label color="solved">0</v-chip>
          </td>
          <td>
            <v-chip variant="flat" label color="open">0</v-chip>
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
            <v-icon @click="remove(item._id)" size="small" class="mr-2"> mdi-delete </v-icon>
            <!-- Icons loop -->
            <v-icon v-if="item.status == userData.status.WAITING_REGISTER" color="grey">mdi-account-check</v-icon>
            <v-icon v-else-if="item.status == userData.status.WAITING_APPROVAL">mdi-account-check</v-icon>
            <v-icon v-else>mdi-email</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table-server>
  </v-container>
</template>
