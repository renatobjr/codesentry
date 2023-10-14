<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-row>
    <v-col class="cs-header">
      <p class="text-h5 ">{{ title }}</p>
    </v-col>
  </v-row>
</template>
