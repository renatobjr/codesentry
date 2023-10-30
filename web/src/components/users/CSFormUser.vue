<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useUserStore } from '@/store/user';
import { useSnackbarStore } from '@/store/snackbar';
import { storeToRefs } from 'pinia';
import { USERS_ROUTES } from '@/router/users';
import validator from '@/utils/validator';
import router from '@/router';

const props = defineProps({
  isEdit: Boolean,
});

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const form = ref();

onMounted( async () => {
  await getUser();
});

onBeforeUnmount(() => {
  userStore.resetUser();
});

const getUser = async () => {
  if (props.isEdit)
    await userStore.fetchUser(router.currentRoute.value.params.id);
};

const save = async () => {
  const is = await form.value.validate();

  if (is.valid) {

    let snackBarMessage = {};

    const result = props.isEdit
      ? await userStore.updateUser(user.value)
      : await userStore.createUser(user.value);

    console.log(result)
    if (result == true) {
      router.push({ name: USERS_ROUTES.LIST });

      snackBarMessage = {
        message: props.isEdit ? 'User updated sucessfully' : 'User saved successfully',
        color: 'success',
      };
    } else {
      snackBarMessage = {
        message: result,
        color: 'error',
      };
    }

    useSnackbarStore().showSnackbar(snackBarMessage);
  }
};

const cancel = () => {
  router.go(-1);
};

</script>

<template>
  <v-container fluid class="cs-container">
    <v-row align="center" justify="center">
      <v-col class="pa-0">
        <v-card color="panel" rounded="0" elevation="1" class="cs-header-form">
          <span class="text-h5 text-grey-darken-5">
            {{ isEdit ? "Edit user" : "Create a new user" }}
          </span>
        </v-card>
        <v-card class="bg-maingrey pa-10" rounded="0" elevation="1">
          <v-form ref="form">
            <v-text-field
              v-model="user.name"
              density="compact"
              variant="outlined"
              label="Name"
              :rules="[validator.isRequired]"
            ></v-text-field>
            <v-row class="mt-2">
              <v-col>
                <v-text-field
                  v-model="user.email"
                  density="compact"
                  variant="outlined"
                  label="Email"
                  :disabled="isEdit"
                  :rules="[validator.isRequired, validator.isEmail]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  v-model="user.role"
                  :items="userStore.roles"
                  item-title="name"
                  item-value="value"
                  density="compact"
                  variant="outlined"
                  label="Role"
                  :rules="[validator.isSelected]"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  @click="save"
                  flat
                  class="mr-4"
                  color="primary"
                  >{{ isEdit ? "Save" : "Create" }}</v-btn
                >
                <v-btn @click="cancel" flat color="warning"
                  >Cancel</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
