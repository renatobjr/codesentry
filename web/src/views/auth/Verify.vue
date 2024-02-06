<script lang="ts" setup>
import { AUTH_ROUTES } from "@/router/auth";
import { ref, onBeforeMount, watch, computed } from "vue";
import { useAuthStore } from "@/store/auth";
import { useSnackbarStore } from "@/store/snackbar";
import router from "@/router";
import { useRoute } from "vue-router";

let route = useRoute();
const inputs = 6;
const form = ref();
const isTimerRunning = ref(false);
const timeLeft = ref(10);
const pin = ref({
  digit: Array(inputs).fill(undefined),
});

onBeforeMount(() => {
  startTimer();
});

const remainingTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});

const nextInput = (index: any, event: any) => {
  const pinLength = pin.value.digit.filter(
    (index) => index != undefined
  ).length;
  pinLength < inputs
    ? form.value.$el[index].focus()
    : form.value.$el[index].blur();

  if (event.inputType === "deleteContentBackward") {
    pin.value.digit[index - 1] = undefined;
  }
};

const startTimer = () => {
  if (!isTimerRunning.value) {
    isTimerRunning.value = true;
    let timer = setInterval(() => {
      timeLeft.value--;
      if (timeLeft.value == 0) {
        clearInterval(timer);
        isTimerRunning.value = false;
        timeLeft.value = 120;
      }
    }, 1000);
  }
};

watch(timeLeft, (time) => {
  if (time === 0) {
    // clearInterval(timerInterval); // this var doesn't exist anywhere
    isTimerRunning.value = false;
  }
});

const verifyCode = async () => {
  let token: any = "";
  const pinCode = pin.value.digit.join("");
  const origin = route.meta.origin;

  origin === AUTH_ROUTES.REGISTER
    ? (token = router.currentRoute.value.query.token)
    : (token = localStorage.getItem(process.env.RECOVERY_TOKEN));

  const result = await useAuthStore().verifyCode({ pinCode, token, origin });

  if (result != true) {
    useSnackbarStore().showSnackbar({
      message: result,
      color: "error",
    });
    return;
  }

  origin === AUTH_ROUTES.REGISTER
    ? router.push({ name: AUTH_ROUTES.CREATE })
    : router.push({ name: AUTH_ROUTES.RESET });
};

const resend = async () => {
  let snackbar: any = {};
  let token: any = "";
  const origin = route.meta.origin;

  origin === AUTH_ROUTES.REGISTER
    ? (token = router.currentRoute.value.query.token)
    : (token = localStorage.getItem(process.env.RECOVERY_TOKEN));

  const result = await useAuthStore().resendCode({ token, origin });

  if (!result) {
    snackbar = {
      message: "It's not possible to resend your code. Try Again!",
      color: "error",
    };
  } else {
    snackbar = {
      message: "A new code was sent to your email!",
      color: "success",
    };
    timeLeft.value = 120;
    startTimer();
  }

  useSnackbarStore().showSnackbar({
    message: snackbar.message,
    color: snackbar.color,
  });
};

const backToLogin = () => {
  router.push({ name: AUTH_ROUTES.LOGIN });
};
</script>

<style>
.form-verify .v-field__input {
  align-items: flex-start;
  display: flex;
  padding: 0px;
  font-size: 24px !important;
  font-weight: 500;
  letter-spacing: normal;
  max-width: 100%;
  text-align: center;
}
</style>

<template>
  <v-form ref="form" class="form-verify">
    <cs-card>
      <template v-slot:title>Verify code</template>
      <template v-slot:content>
        <p class="mb-10">Enter the 6-digit code sent to your email.</p>
        <v-row id="pin" aling="start">
          <v-col v-for="index in inputs" :key="index" class="pa-2">
            <v-text-field
              v-model="pin.digit[index - 1]"
              variant="outlined"
              type="text"
              maxLength="1"
              @input="nextInput(index, $event)"
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
          :disabled="
            pin.digit.filter((index) => index != undefined).length < inputs
          "
          >Verify code</v-btn
        >
        <v-btn
          @click="resend"
          class="cs-btn-login"
          variant="flat"
          block
          color="secondary"
          :disabled="isTimerRunning"
        >
          {{
            isTimerRunning ? `Resend code (${remainingTime})` : "Resend code"
          }}
        </v-btn>
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
  </v-form>
</template>
