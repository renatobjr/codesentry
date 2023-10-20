// @TODO: Refactor to remove de navigation drawer from the default layout

<script setup>
import { useRoute } from "vue-router";
import router from "@/router";
import DefaultView from "./Default.vue";
import { AUTH_ROUTES } from "@/router/auth";
import { onBeforeMount, ref } from "vue";

const drawer = ref(true);
const rail = ref(false);
const links = [
  { name: "dashboard", path: "/dashboard", icon: "mdi-view-dashboard" },
  { name: "projects", path: "/projects", icon: "mdi-briefcase" },
  { name: "issues", path: "/issues", icon: "mdi-bug" },
  { name: "users", path: "/users", icon: "mdi-account-group" },
  // { name: "settings", path: "/settings", icon: "mdi-cog" },
];

const closeDock = () => {
  console.log("funciona");
};

let route = useRoute();

const isActive = (path) => {
  return route.meta.active === path;
};

const navigateTo = (path) => {
  router.push({ path });
};

const logout = () => {
  // localStorage.removeItem("token");
  router.push({ name: AUTH_ROUTES.LOGIN })
};
</script>

<template>
  <default-view>
    <v-navigation-drawer
      border="false"
      class="bg-background"
      v-model="drawer"
      :rail="rail"
      @close-dock="() => console.log('ok')"
    >
      <v-list-item class="pa-4">
        <v-avatar class="me-4" color="blue-grey" size="36"></v-avatar>
        <span class="text-blue-grey-darken-1">Username</span>
      </v-list-item>
      <template v-for="link in links" :key="link">
        <v-list-item
          :active="isActive(link.path)"
          active-class="bg-primary"
          link
          @click="navigateTo(link.path)"
        >
          <template v-slot:prepend>
            <v-icon
              :color="isActive(link.path) ? 'white' : 'primary'"
              >{{ link.icon }}</v-icon
            >
          </template>

          <span
            :class="isActive(link.path) ? 'white' : 'text-primary'"
            class="text-capitalize"
            >{{ link.name }}</span
          >
        </v-list-item>
      </template>
      <v-list-item
        @click="logout"
      >
        <template v-slot:prepend>
          <v-icon
            color="blue-grey-darken-1"
            >mdi-logout</v-icon
          >
        </template>
        <span
          class="text-primary text-capitalize"
          >Logout</span
        >
      </v-list-item>
    </v-navigation-drawer>

    <slot></slot>
  </default-view>
</template>
