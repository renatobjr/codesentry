<script lang="ts" setup>
import { AUTH_ROUTES } from "@/router/auth";
import { reactive } from "vue";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useSnackbarStore } from "@/store/snackbar";
import router from "@/router";
import validator from "@/utils/validator";

const form = ref();
const subscribeData = reactive({
  fullName: "",
  subscribeEmail: "",
});

const subscribe = async () => {
  let snackbar: any = {};
  const is = await form.value.validate();

  if (!is.valid) return;

  const result = await useAuthStore().subscribe(subscribeData);

  if (result == true) {
    snackbar.message = "Your request has been sent. Vertify your email";
    snackbar.color = "success";

    router.push({ name: AUTH_ROUTES.LOGIN });
  } else {
    snackbar.message = result;
    snackbar.color = "error";
  }

  useSnackbarStore().showSnackbar(snackbar);
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <v-form class="mt-5" ref="form">
    <cs-card>
      <template v-slot:title>Request Subscribe</template>
      <template v-slot:content>
        <v-text-field
          v-model="subscribeData.fullName"
          variant="outlined"
          type="email"
          density="compact"
          append-inner-icon="mdi-email"
          label="Full name"
          :rules="[validator.isRequired]"
          class="mt-8"
        />
        <v-text-field
          v-model="subscribeData.subscribeEmail"
          variant="outlined"
          type="email"
          density="compact"
          append-inner-icon="mdi-email"
          label="Email"
          :rules="[validator.isRequired, validator.isEmail]"
          class="mt-3"
        />
      </template>
      <template v-slot:actions>
        <v-btn
          @click="subscribe"
          class="cs-btn-login"
          variant="flat"
          block
          color="primary"
          >Subscribe</v-btn
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
