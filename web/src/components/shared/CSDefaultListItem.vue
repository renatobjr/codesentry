<script setup>
defineProps({
  cols: {
    type: Number,
    required: false,
  },
  class: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <v-col :class="class" :cols="cols" align-self="center">
    <slot></slot>
  </v-col>
</template>
