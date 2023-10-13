<script setup>
  import DefaultView from './Default.vue';
</script>

<template>
  <default-view>
    <v-container fluid class="fill-height">
      <v-row justify="center">
        <v-col cols="6">

          <slot />
        </v-col>
      </v-row>
    </v-container>
  </default-view>
</template>



