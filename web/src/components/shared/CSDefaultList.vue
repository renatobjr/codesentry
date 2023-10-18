<script setup>
defineProps({
  dataHeader: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card class="cs-header-list" rounded="0" elevation="0">
        <v-list density="compact" class="bg-panel">
          <v-row style="margin: 0 auto">
            <v-col v-for="data in dataHeader" :cols="data.cols">
              <span class="font-weight-bold text-primary">{{ data.tag }}</span>
            </v-col>
          </v-row>
        </v-list>
        <v-list density="compact" class="bg-maingrey">
          <v-row style="margin: 0 auto">
            <slot name="dataList"></slot>
          </v-row>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
