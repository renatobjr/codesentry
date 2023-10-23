<script setup>
import { ref, onBeforeMount } from "vue";
import router from "@/router";

let isEdit = ref(false);

onBeforeMount(() => {
  if (router.currentRoute.value.params.id) {
    isEdit.value = true;
  }
});

const save = () => {
  console.log("teste");
};

const cancel = () => {
  router.go(-1);
};
</script>

<template>
  <cs-header title="New Issue"></cs-header>

  <cs-form-issue
    :isEdit="isEdit"
    @save="save"
    @cancel="cancel"
  ></cs-form-issue>
</template>
