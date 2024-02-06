<script lang="ts" setup>
defineProps<{
  cols?: number;
  class?: string;
}>();
</script>

<template>
  <v-col :class="class" :cols="cols" align-self="center">
    <slot />
  </v-col>
</template>
