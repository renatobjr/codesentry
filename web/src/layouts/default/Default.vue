<script lang="ts" setup>
import { useSnackbarStore } from "@/store/snackbar";
import { useDialogStore } from "@/store/dialog";
import { storeToRefs } from "pinia";

const snackbarStore = useSnackbarStore();
const dialogStore = useDialogStore();
const { snackbar } = storeToRefs(snackbarStore);
const { dialog } = storeToRefs(dialogStore);

const confirm = () => {
  dialogStore.resolve(true);
};

const cancel = () => {
  dialogStore.resolve(false);
};
</script>

<template>
  <!-- Dailog -->
  <v-dialog v-model="dialog.isOpen" :width="dialog.type === 'text' ? '500' : '80%' ">
    <v-card :title="dialog.title">
      <v-card-text v-if="dialog.type == 'text'">
        {{ dialog.message }}
      </v-card-text>
      <v-img v-else aspect-ratio="1" cover :src="dialog.message"/>

      <v-card-actions v-if="dialog.showActions">
        <v-spacer></v-spacer>

        <v-btn
          color="warning"
          variant="flat"
          text="Disagree"
          @click="cancel"
        ></v-btn>
        <v-btn
          color="primary"
          variant="flat"
          text="Agree"
          @click="confirm"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

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
          <v-btn color="primary" flat @click="snackbar.show = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
      <slot />
    </v-main>
  </v-app>
</template>
