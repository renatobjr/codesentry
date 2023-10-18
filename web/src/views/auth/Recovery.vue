<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import router from "@/router";

const verify = () => {
  router.push(AUTH_ROUTES.VERIFY);
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <cs-card>
    <template v-slot:title>Recovery account</template>
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
      </form>
    </template>
    <template v-slot:actions>
      <v-btn
        @click="verify"
        class="cs-btn-login"
        variant="flat"
        block
        color="primary"
        >Continue</v-btn
      >
      <v-btn
        @click="back"
        class="cs-btn-login"
        variant="flat"
        block
        color="secundary"
        >Back</v-btn
      >
    </template>
  </cs-card>
</template>
