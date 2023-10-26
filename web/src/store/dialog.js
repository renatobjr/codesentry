import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useDialogStore = defineStore('dialog', () => {
  let resolved;
  const dialog = ref({
    isOpen: false,
    title: null,
    message: null,
  })

  const openDialog = ({ title, message}) => {
    dialog.value.isOpen = true
    dialog.value.title = title
    dialog.value.message = message

    return new Promise((resolve) => {
      resolved = resolve;
    });
  };

  const resolve = (value) => {
    resolved(value)
    dialog.value.isOpen = false;
  }

  return  { dialog, openDialog, resolve };
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDialogStore, import.meta.hot));
}
