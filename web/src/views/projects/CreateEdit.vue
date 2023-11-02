<script setup>
import router from "@/router";
import { ref } from "vue";
import { onBeforeMount } from "vue";

let isEdit = ref(false);

onBeforeMount(() => {
  if (router.currentRoute.value.params.id) {
    isEdit.value = true;
  }
});
</script>

<template>
  <cs-header title="New Project"></cs-header>

  <cs-form-project
    :isEdit="isEdit"
  ></cs-form-project>
</template>
