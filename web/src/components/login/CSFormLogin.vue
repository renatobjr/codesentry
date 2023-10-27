<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { DASH_ROUTES } from "@/router/dashboard";
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useSnackbarStore } from "@/store/snackbar";
import router from "@/router";
import validator from "@/utils/validator";

const form = ref();
const loginData = reactive({
  email: 'admin@codesentry.org',
  password: 'admin',
});

const login = async () => {
  const isValid = await form.value.validate();

  if (!isValid) return;

  const result = await useAuthStore().login(loginData);
  console.log(result);

  if (result) {
    console.log('login success')
    router.push({ name: DASH_ROUTES.DASHBOARD });
  } else {
    useSnackbarStore().showSnackbar({
      message: 'Invalid credentials',
      color: 'error',
    });
  }
};
const subscribe = () => {
  router.push({ name: AUTH_ROUTES.SUBSCRIBE });
};
</script>

<template>
  <v-form class="mt-5" ref="form">
    <cs-card>
      <template v-slot:title>Login</template>
      <template v-slot:content>
        <v-text-field
          v-model="loginData.email"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-email"
          type="email"
          label="Email"
          :rules="[validator.isRequired, validator.isEmail]"
        ></v-text-field>
        <v-text-field
          v-model="loginData.password"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-eye"
          type="password"
          label="Password"
          class="mt-2"
          :rules="[validator.isRequired]"
        ></v-text-field>
        <router-link class="d-flex flex-row-reverse" to="recovery"
          >Recovery Password</router-link
        >
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
          color="secondary"
          >Request Access</v-btn
        >
      </template>
    </cs-card>
  </v-form>
</template>
