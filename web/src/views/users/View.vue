<script setup>
// Only for demo purpose
import { dataUsers, dataHeader } from "@/data/users";

import { USERS_ROUTES } from "@/router/users";
</script>

<template>
  <cs-header
    title="Users"
    :actions="[{ title: 'New user', route: USERS_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    <cs-list :dataHeader="dataHeader">
      <template v-slot:dataList>
        <cs-list-row v-for="(user, index) in dataUsers">
          <cs-list-item :cols="3">
            <v-avatar color="blue-grey" size="36"></v-avatar>
          </cs-list-item>

          <cs-list-item :cols="3">
            <span class="d-block" v-for="project in user.projects">{{
              project.name
            }}</span>
          </cs-list-item>

          <cs-list-item :cols="3">
            <div v-for="issue in user.assignedIssues">
              <span class="mr-2"
                ><v-icon :color="issue.status">mdi-square-rounded</v-icon></span
              >
              <span class="mr-2">{{ issue.priority }}</span>
              <span>{{ issue.name }}</span>
            </div>
          </cs-list-item>

          <cs-list-item :cols="3">
            <v-icon color="primary" class="mr-4">mdi-pencil</v-icon>
            <v-icon color="primary" class="mr-4">mdi-eye</v-icon>
            <v-icon color="primary" class="mr-4">mdi-delete</v-icon>
          </cs-list-item>
        </cs-list-row>
      </template>
    </cs-list>
  </v-container>
</template>
