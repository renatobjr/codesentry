<script setup>
import { useSnackbarStore } from '@/store/snackbar';
import { storeToRefs } from 'pinia';

const snackbarStore = useSnackbarStore();
const { snackbar } = storeToRefs(snackbarStore);
</script>

<template>
  <v-app>
    <v-main>
      <v-snackbar
      v-model="snackbar.show"
        variant="flat"
        location="top"
        :color="snackbar.color"
      >
        <span>{{ snackbar.message }}</span>

        <template v-slot:actions>
          <v-btn
            color="primary"
            flat
            @click="snackbar.show = false"
          >Close</v-btn>
        </template>
      </v-snackbar>
      <slot />
    </v-main>
  </v-app>
</template>



