<script setup>
import { ISSUES_ROUTES } from "@/router/issues";

const dataHeader = [
  { cols: "1", tag: "Asignned" },
  { cols: "1", tag: "Status" },
  { cols: "2", tag: "Issue" },
  { cols: "6", tag: "Description" },
  { cols: "2", tag: "Actions" },
];
</script>

<template>
  <cs-header
    title="Issues"
    :actions="[{ title: 'New Issue', route: ISSUES_ROUTES.ADD }]"
  ></cs-header>

  <v-container class="cs-container">
    <cs-list :dataHeader="dataHeader">
      <template v-slot:dataList>
        <cs-list-item :cols="1">
          <v-avatar color="blue-grey" size="36"></v-avatar>
        </cs-list-item>
        <cs-list-item :cols="1">
          <v-icon>mdi-square-rounded</v-icon>
          <v-icon size="x-large">mdi-chevron-up</v-icon>
        </cs-list-item>

        <cs-list-item :cols="2">
          <span class="d-block">Issue Name</span>
          <span>Created at 00/00/0000</span>
        </cs-list-item>
        <cs-list-item :cols="6">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            blanditiis aliquid sunt eum! Dolore rem fuga necessitatibus
            doloribus officiis quaerat incidunt facilis cumque laudantium, animi
            tempore ex ea obcaecati unde.</span
          >
        </cs-list-item>
        <cs-list-item :cols="2">
          <v-icon color="primary" class="mr-4">mdi-pencil</v-icon>
          <v-icon color="primary" class="mr-4">mdi-eye</v-icon>
          <v-icon color="primary" class="mr-4">mdi-delete</v-icon>
        </cs-list-item>
      </template>
    </cs-list>
  </v-container>
</template>
