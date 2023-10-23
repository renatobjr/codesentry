<script setup>
import { USERS_ROUTES } from "@/router/users";
</script>

<template>
  <cs-header
    title="Users"
    :actions="[{ title: 'New user', route: USERS_ROUTES.ADD }]"
  ></cs-header>

  <cs-list-user />
</template>
