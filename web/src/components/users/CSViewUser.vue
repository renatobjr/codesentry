<script setup>
import dataIssues from "@/data/issues";
import { ref, onMounted } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import normalize from "@/utils/normalize";
import router from "@/router";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted( async () => {
  await getUser();
});

const getUser = async () => {
  await userStore.fetchUser(router.currentRoute.value.params.id);
};

let header = ref(dataIssues.header);
</script>

<template>
  <v-container fluid class="cs-container">
    <v-row>
      <v-col cols="3">
        <v-card rounded="1" class="pa-4">
          <v-card-title class="d-flex justify-center">
            <v-avatar
              size="128"
              color="primary"
            >
            <span style="font-size: 4rem;" class="font-weight-bold">{{ normalize.setAvatar(user.name) }}</span>
            </v-avatar>
          </v-card-title>
          <v-card-text class="text-center mt-4">
            <span class="text-h4 d-block mb-2">{{ user.name }}</span>
            <span class="d-block">{{ user.email }}</span>
            <v-chip label variant="flat" class="mt-6 text-capitalize" color="accent">{{ user.role }}</v-chip>
          </v-card-text>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Total Resolved Issues</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">25</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Total Assigned Issues</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">25</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Total Assigned Projects</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">2</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col>
                <span class="text-grey-darken-2 font-weight-bold">Last login</span>
              </v-col>
              <v-col>
                <span class="d-flex float-right">
                  {{ normalize.formatDate(user.lastLogin) }}
                </span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col>
        <cs-list-issues
          :header="header"
          :query="{ userId: router.currentRoute.value.params.id }"
          from="users"
        ></cs-list-issues>
      </v-col>
    </v-row>
  </v-container>
</template>
