<script setup>
import router from '@/router';

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
  <v-row>
    <v-col class="cs-header">
      <p class="text-h5">{{ title }}</p>
      <template v-for="action in actions">
        <br />
        <v-btn flat @click="router.push({ name: action.route })">{{ action.title }}</v-btn>
      </template>
    </v-col>
  </v-row>
</template>
