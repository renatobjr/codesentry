<script setup>
</script>

<template>
  <cs-card>
    <template v-slot:title>Reset Password</template>
    <template v-slot:content>
      <form class="mt-5" action="">
        <v-text-field
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-eye"
          type="password"
          name="passwprd"
          label="Password"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-eye"
          type="password"
          name="comfirmPasswprd"
          label="Confirm password"
        ></v-text-field>
      </form>
    </template>
    <template v-slot:actions>
      <v-btn
        class="cs-btn-login"
        variant="flat"
        block
        color="primary"
        >Reset Password</v-btn
      >
    </template>
  </cs-card>
</template>
