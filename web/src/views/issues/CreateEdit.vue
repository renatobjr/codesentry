<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import router from "@/router";

let isEdit = ref(false);

onBeforeMount(() => {
  if (router.currentRoute.value.params.id) {
    isEdit.value = true;
  }
});
</script>

<template>
  <cs-header title="New Issue" />

  <cs-form-issue :isEdit="isEdit" />
</template>
