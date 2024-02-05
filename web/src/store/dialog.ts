import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useDialogStore = defineStore("dialog", () => {
  let resolved: any;
  const dialog = ref<{
    isOpen: boolean;
    showActions: boolean;
    title: undefined | string;
    message: undefined | string;
    type: undefined | string;
  }>({
    isOpen: false,
    showActions: true,
    title: undefined,
    message: undefined,
    type: undefined,
  });

  const openDialog = ({
    title,
    message,
    showActions = true,
    type = "text",
  }: {
    title: undefined | string;
    message: undefined | string;
    showActions: boolean;
    type: string;
  }) => {
    dialog.value.isOpen = true;
    dialog.value.showActions = showActions;
    dialog.value.title = title;
    dialog.value.message = message;
    dialog.value.type = type;

    return new Promise((resolve) => {
      resolved = resolve;
    });
  };

  const resolve = (value:any) => {
    resolved(value);
    dialog.value.isOpen = false;
  };

  return { dialog, openDialog, resolve };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDialogStore, import.meta.hot));
}
