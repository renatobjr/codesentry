<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";
import DefaultView from "./Default.vue";
import normalize from "@/utils/normalize";
import router from "@/router";

const drawer = ref(true);
const links = [
  { name: "Dashboard", path: "/dashboard", icon: "mdi-view-dashboard" },
  { name: "Projects", path: "/projects", icon: "mdi-briefcase" },
  { name: "Issues", path: "/issues", icon: "mdi-bug" },
  { name: "Users", path: "/users", icon: "mdi-account-group" },
  // { name: "settings", path: "/settings", icon: "mdi-cog" },
];

let route = useRoute();

const isActive = (path) => {
  return route.meta.active === path;
};

const navigateTo = (path) => {
  router.push({ path });
};

const logout = () => {
  useAuthStore().logout();
  router.push({ name: AUTH_ROUTES.LOGIN })
};
</script>

<template>
  <default-view>
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      rail
      border="false"
      class="bg-primary"
    >
      <v-list>
        <v-list-item
        >
          <template v-slot:prepend>
            <v-avatar class="font-weight-bold ml-n3" color="white" :size="32">{{ normalize.setAvatar('James Franco') }}</v-avatar>
          </template>
          <template v-slot:title>
            <span>James Franco</span>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="comfortable" nav>
        <v-list-item v-for="link in links" :active="isActive(link.path)" :prepend-icon="link.icon" :title="link.name" :value="link.name" base-color="white" @click="navigateTo(link.path)"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Logout" @click="logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <slot></slot>
  </default-view>
</template>
