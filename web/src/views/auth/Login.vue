<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { DASH_ROUTES } from "@/router/dashboard";
import { RouterLink } from "vue-router";
import router from "@/router";

const login = () => {
  router.push({ name: DASH_ROUTES.DASHBOARD });
};
const subscribe = () => {
  router.push({ name: AUTH_ROUTES.SUBSCRIBE });
};
</script>

<template>
  <cs-card>
    <template v-slot:title>Login</template>
    <template v-slot:content>
      <form class="mt-5" action="">
        <v-text-field
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-email"
          type="email"
          name="email"
          label="Email"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-eye"
          type="password"
          name="password"
          label="Password"
        ></v-text-field>
        <router-link class="d-flex flex-row-reverse" to="recovery"
          >Recovery Password</router-link
        >
      </form>
    </template>
    <template v-slot:actions>
      <v-btn
        @click="login"
        class="cs-btn-login"
        variant="flat"
        block
        color="primary"
        >Access</v-btn
      >
      <v-btn
        @click="subscribe"
        class="cs-btn-login"
        variant="flat"
        block
        color="secundary"
        >Request Access</v-btn
      >
    </template>
  </cs-card>
</template>
