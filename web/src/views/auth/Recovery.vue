<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import validator from "@/utils/validator";
import router from "@/router";

const auth = useAuthStore();
const form  = ref();

const verify = () => {
  const isValid = form.value.validate();
}

const back = () => {
  router.go(-1);
};

</script>

<template>
  <cs-card>
    <template v-slot:title>Recovery account</template>
    <template v-slot:content>
      <v-form class="mt-5" ref="form">
        <v-text-field
          v-model="auth.recoveryEmail"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-email"
          type="email"
          label="Email"
          :rules="[validator.isRequired, validator.isEmail]"
        ></v-text-field>
      </v-form>
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
        color="secondary"
        >Back</v-btn
      >
    </template>
  </cs-card>
</template>
