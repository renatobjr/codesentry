<script setup>
import { AUTH_ROUTES } from '@/router/auth';
import router from '@/router';
</script>

<template>
  <cs-card>
    <template v-slot:title>It's work!</template>
    <template v-slot:content>
      <p>You set a new password, please go to login and access Codesentry system!</p>
      <v-btn
        class="cs-btn-login mt-10"
        variant="flat"
        block
        color="primary"
        @click="router.push({ name: AUTH_ROUTES.LOGIN })"
      >Go to Login</v-btn>
    </template>
  </cs-card>
</template>
