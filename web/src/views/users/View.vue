<script setup>
import { USERS_ROUTES } from "@/router/users";

</script>

<template>
  <cs-header
    title="Users"
    :actions="[{ title: 'Edit', route: USERS_ROUTES.EDIT }]"
  ></cs-header>

  <cs-view-user></cs-view-user>

</template>
