<script setup></script>

<template>
  <cs-header title="Projects"></cs-header>

  <v-row align="center" justify="center">
    <v-col class="pa-0">
      <v-card rounded="0">
        <v-list density="compact" class="pa-2">
          <v-row style="margin: 0 auto">
            <v-col cols="2">
              <span class="d-block text-uppercase">Project Name</span>
            </v-col>
            <v-col class="cs-datalist-col-center" cols="2">
              <span class="d-block text-uppercase">Track Issues</span>
            </v-col>
            <v-col cols="8">
              <span class="d-block text-uppercase float-right">Actions</span>
            </v-col>
          </v-row>
        </v-list>
      <v-divider></v-divider>
      </v-card>
      <v-card rounded="0" v-for="item in 8">
        <v-list density="compact" class="pa-3">
          <v-row  style="margin: 0 auto">
            <v-col cols="2">
              <span class="d-block">Project Name</span>
              <span>Created at</span>
            </v-col>
            <v-col class="cs-datalist-col-center" cols="2" align-self="center">
              <span>Graph</span>
            </v-col>
            <v-col cols="8">
              <v-icon  color="red" class="float-right">mdi-delete</v-icon>
              <v-icon class="float-right mr-4">mdi-pencil</v-icon>
            </v-col>
          </v-row>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>
