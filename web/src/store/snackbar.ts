import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useSnackbarStore = defineStore("snackbar", () => {
  const snackbar = ref({
    show: false,
    message: null,
    color: "success",
  });

  const showSnackbar = ({ message, color }: any) => {
    snackbar.value.show = true;
    snackbar.value.message = message;
    snackbar.value.color = color;
  };

  return { snackbar, showSnackbar };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSnackbarStore, import.meta.hot));
}
