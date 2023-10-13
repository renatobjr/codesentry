<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import card from "@/components/login/Card.vue";
import router from "@/router";

const verify = () => {
  router.push(AUTH_ROUTES.VERIFY);
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <card>
    <template v-slot:title>Recovery account</template>
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
      </form>
    </template>
    <template v-slot:actions>
      <v-btn
        @click="verify"
        class="btn-login"
        variant="flat"
        block
        color="primary"
        >Continue</v-btn
      >
      <v-btn
        @click="back"
        class="btn-login"
        variant="flat"
        block
        color="secondary"
        >Back</v-btn
      >
    </template>
  </card>
</template>
