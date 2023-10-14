<script setup>
  import DefaultView from './Default.vue';

  const links = [
    { name: 'HOME', path: '/dashboard' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ISSUES', path: '' },
    { name: 'USERS', path: '' },
  ];
</script>

<template>
  <default-view>
    <v-app-bar class="bg-blue-grey-darken-4" flat>
      <v-container class="mx-auto d-flex align-center justify-content">
        <v-avatar
          class="me-4"
          color="blue-grey"
          size="36"
        ></v-avatar>
        <v-btn
          v-for="link in links"
          :key="link"
          :text="link.name"
          :href="link.path"
          variant="text"
        ></v-btn>
      </v-container>
    </v-app-bar>

    <v-container class="cs-container" fluid>
      <slot />
    </v-container>

  </default-view>
</template>



