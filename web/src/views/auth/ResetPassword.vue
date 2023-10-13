<script setup>
import card from "@/components/login/Card.vue";
</script>

<template>
  <card>
    <template v-slot:title>Reset Password</template>
    <template v-slot:content>
      <form class="mt-5" action="">
        <v-text-field
          outlined
          dense
          append-inner-icon="mdi-eye"
          type="password"
          name="passwprd"
          label="Password"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          append-inner-icon="mdi-eye"
          type="password"
          name="comfirmPasswprd"
          label="Confirm password"
        ></v-text-field>
      </form>
    </template>
    <template v-slot:actions>
      <v-btn
        class="btn-login"
        variant="flat"
        block
        color="primary"
        >Reset Password</v-btn
      >
    </template>
  </card>
</template>
