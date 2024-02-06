<script lang="ts" setup>
import router from "@/router";
import { useRoute } from "vue-router";
import { onBeforeMount, watch } from "vue";

const route = useRoute();
let links: any = "";

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
  <v-row class="ma-0 cs-header elevation-0">
    <v-col align-self="center">
      <!-- <span class="mr-16"><v-icon color="primary" @click="$emit('closeDock')" icon="mdi-dock-left"></v-icon></span> -->
      <span>
        <v-icon
          color="primary"
          :icon="links[0].title"
          @click="router.push({ name: 'dashboard' })"
        />
      </span>
      <template v-for="(link, index) in links.slice(1)">
        <v-icon color="primary" class="mx-2">mdi-chevron-right</v-icon>
        <router-link :to="link.disable ? '' : link.href" class="text-primary">
          {{ link.title }}
        </router-link>
      </template>
    </v-col>
    <v-col>
      <template v-for="action in actions">
        <v-btn
          class="float-right"
          flat
          @click="router.push({ name: (action as any).route })"
        >
          {{ (action as any).title }}
        </v-btn>
      </template>
    </v-col>
  </v-row>
</template>
