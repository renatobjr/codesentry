<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import router from "@/router";

const inputs = 6;

const verifyCode = () => {
  router.push({ name: AUTH_ROUTES.RESET });
};

const backToLogin = () => {
  router.push({ name: AUTH_ROUTES.LOGIN });
};
</script>

<template>
  <cs-card>
    <template v-slot:title>Verify code</template>
    <template v-slot:content>
      <p class="mb-10">Enter the 6-digit code sent to your email.</p>
      <v-row id="pin" aling="start">
        <v-col v-for="index in inputs" :key="index" class="pa-2">
          <v-text-field
            outlined
            class="ma-0"
            type="text"
            maxLength="1"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
    <template v-slot:actions>
      <v-btn
        @click="verifyCode"
        class="cs-btn-login"
        variant="flat"
        block
        color="primary"
        >Verify code</v-btn
      >
      <v-btn class="cs-btn-login" variant="flat" block color="secondary"
        >Resend code</v-btn
      >
      <v-btn
        @click="backToLogin"
        class="cs-btn-login"
        variant="flat"
        block
        color="secondary"
        >Back to Login</v-btn
      >
    </template>
  </cs-card>
</template>
