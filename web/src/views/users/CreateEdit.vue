<script setup>
import router from '@/router';
import { ref, onBeforeMount } from 'vue';

let isEdit = ref(false);

onBeforeMount(() => {
  if (router.currentRoute.value.params.id) {
    isEdit.value = true;
  }
});

</script>

<template>
  <cs-header title="New user"></cs-header>

  <cs-form-user
    :isEdit="isEdit"
  ></cs-form-user>
</template>
