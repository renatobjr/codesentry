<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { RouterLink } from "vue-router";
import card from "@/components/login/Card.vue";
import router from "@/router";

const subscribe = () => {
  router.push({ name: AUTH_ROUTES.SUBSCRIBE });
};
</script>

<template>
  <card>
    <template v-slot:title>Login</template>
    <template v-slot:content>
      <form class="mt-5" action="">
        <v-text-field
          outlined
          dense
          append-inner-icon="mdi-email"
          type="email"
          name="email"
          label="Email"
        ></v-text-field>
        <v-text-field
          outlined
          dense
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
      <v-btn class="btn-login" variant="flat" block color="primary"
        >Access</v-btn
      >
      <v-btn @click="subscribe" class="btn-login" variant="flat" block color="secondary"
        >Request Access</v-btn
      >
    </template>
  </card>
</template>
