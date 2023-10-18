<script setup>
defineProps({
  cols: {
    type: Number,
    required: false,
  },
})
</script>

<template>
  <v-col :cols="cols" align-self="center">
    <slot></slot>
  </v-col>
</template>
