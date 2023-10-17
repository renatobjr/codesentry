<script setup>
import router from "@/router";
import { useRoute } from "vue-router";
import { onBeforeMount, watch } from "vue";

const route = useRoute();
let links = "";

watch(
  () => route.meta.breadcrumb,
  () => {
    updateBreadcrumb();
  }
);

onBeforeMount(() => {
  updateBreadcrumb();
});

const updateBreadcrumb = () => {
  links = route.meta.breadcrumb;
};

defineProps({
  title: {
    type: String,
    required: true,
  },
  actions: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<template>
  <v-row class="ma-0 cs-header">
    <v-col class="">
      <span class="mr-16"><v-icon color="blue-grey-darken-1" @click="$emit('closeDock')" icon="mdi-dock-left"></v-icon></span>
      <span><v-icon color="blue-grey-darken-1" :icon="links[0].title" /></span>
        <template v-for="(link, index) in links.slice(1)">
          <v-icon color="blue-grey-darken-1" class="mx-2">mdi-chevron-right</v-icon>
          <router-link :to="link.disable ? '' : link.href"  class="text-blue-grey-darken-1">{{ link.title }}</router-link>
      </template>
    </v-col>
    <v-col>
      <template v-for="action in actions">
        <v-btn class="float-right" size="small" flat @click="router.push({ name: action.route })">{{
          action.title
        }}</v-btn>
      </template>
    </v-col>
  </v-row>
</template>
