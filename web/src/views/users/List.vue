<script lang="ts" setup>
import { USERS_ROUTES } from "@/router/users";
</script>

<template>
  <cs-header
    title="Users"
    :actions="[{ title: 'New user', route: USERS_ROUTES.ADD }]"
  />

  <cs-list-user />
</template>
