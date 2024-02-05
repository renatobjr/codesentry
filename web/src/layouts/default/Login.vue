<script lang="ts" setup>
  import DefaultView from './Default.vue';
</script>

<template>
  <default-view>
    <v-container fluid class="fill-height">
      <v-row justify="center">
        <v-col lg="3" md="6" sm="6" xs="12">
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </default-view>
</template>



