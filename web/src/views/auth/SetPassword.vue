<script setup>
import { AUTH_ROUTES } from "@/router/auth";
import { ref, reactive, onBeforeMount } from "vue";
import { useSnackbarStore } from "@/store/snackbar";
import { useAuthStore } from "@/store/auth";
import validator from "@/utils/validator";
import router from "@/router";
import { useRoute } from "vue-router";

onBeforeMount(() => {
  console.log(route.meta.origin);
});

let route = useRoute();
const form = ref();
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const setPasswordData = reactive({
  password: "",
  confirmPassword: "",
});

const setPassword = async () => {
  let snackbar = {};
  const isValid = await form.value.validate();

  if (!isValid) return;

  const result = await useAuthStore().setPassword({ setPasswordData });

  if (!result) {
    useSnackbarStore().showSnackbar({
      message: "It's not possible to change your password. Try Again!",
      color: "error",
    });
    return;
  }

  router.push({ name: AUTH_ROUTES.PASSWORD_SAVED });
};
</script>

<template>
  <v-form class="mt-5" ref="form">
    <cs-card>
      <template v-slot:title>{{
        route.meta.origin === "create-password"
          ? "Create Password"
          : "Reset Password"
      }}</template>
      <template v-slot:content>
        <v-text-field
          v-model="setPasswordData.password"
          variant="outlined"
          density="compact"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          name="passwprd"
          label="Password"
          class="mt-10"
          :rules="[validator.isRequired]"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
        <v-text-field
          v-model="setPasswordData.confirmPassword"
          variant="outlined"
          density="compact"
          :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showConfirmPassword ? 'text' : 'password'"
          name="comfirmPasswprd"
          label="Confirm password"
          class="mt-2"
          :rules="[
            validator.isRequired,
            validator.isMathcing(
              setPasswordData.password,
              setPasswordData.confirmPassword
            ),
          ]"
          @click:append-inner="showConfirmPassword = !showConfirmPassword"
        ></v-text-field>
      </template>
      <template v-slot:actions>
        <v-btn
          @click="setPassword"
          class="cs-btn-login"
          variant="flat"
          block
          color="primary"
          >Save Password</v-btn
        >
      </template>
    </cs-card>
  </v-form>
</template>
