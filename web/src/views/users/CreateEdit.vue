<script setup>
import router from '@/router';
import { ref } from 'vue';

let isEdit = ref(false);

const save = () => {
  console.log('teste');
};

const cancel = () => {
  router.go(-1);
};
</script>

<template>
  <cs-header title="New user"></cs-header>

  <cs-form-user
    :isEdit="isEdit"
    @cancel="cancel"
    @save="save"
  ></cs-form-user>
</template>
