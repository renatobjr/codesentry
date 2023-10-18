<script setup>
import router from "@/router";

const back = () => {
  router.go(-1);
};
</script>

<template>
  <cs-card>
    <template v-slot:title>Request Subscribe</template>
    <template v-slot:content>
      <form class="mt-5" action="">
        <v-text-field
          outlined
          dense
          append-inner-icon="mdi-email"
          type="email"
          name="Email"
          label="email"
        ></v-text-field>
      </form>
    </template>
    <template v-slot:actions>
      <v-btn
        class="cs-btn-login"
        variant="flat"
        block
        color="primary"
        >Request</v-btn
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
