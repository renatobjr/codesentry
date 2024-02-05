<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from "vue";
import {
  useRoute,
  RouterView,
  RouteLocationNormalizedLoaded,
} from "vue-router";

import LayoutTypes from "./@types/layouts";

import Base from "./layouts/default/Base.vue";
import Login from "./layouts/default/Login.vue";

let route: RouteLocationNormalizedLoaded;
onBeforeMount(() => {
  route = useRoute();
});

const layout = computed(() => {
  let currentLayout = Login;
  if ((route.meta.layout as LayoutTypes) === "Base") {
    currentLayout = Base;
  }

  return currentLayout;
});
</script>