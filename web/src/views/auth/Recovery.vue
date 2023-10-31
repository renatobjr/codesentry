<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useSnackbarStore } from "@/store/snackbar";
import router from "@/router";
import validator from "@/utils/validator";

const form = ref();
const auth = ref({
  recoveryEmail: "",
});

const verify = async () => {
  const is = form.value.validate();

  if (!is.valid) return;

  const result = await useAuthStore().verifyEmail(auth.value.recoveryEmail);

  if (result == true) {
    router.push(AUTH_ROUTES.VERIFY);
  } else {
    useSnackbarStore().showSnackbar({
      message: result,
      color: "error",
    });
  }
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <v-form class="mt-5" ref="form">
    <cs-card>
      <template v-slot:title>Recovery passwrod</template>
      <template v-slot:content>
        <v-text-field
          v-model="auth.recoveryEmail"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-email"
          type="email"
          label="Email"
          :rules="[validator.isRequired, validator.isEmail]"
          class="mt-8"
        ></v-text-field>
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
  </v-form>
</template>
