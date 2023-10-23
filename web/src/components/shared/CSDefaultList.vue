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
      <v-card class="cs-header-list" rounded="0" elevation="1">
        <v-list density="compact" class="bg-panel" style="border-bottom: thin solid rgba(0, 0, 0, 0.12) !important">
          <v-row style="margin: 0 auto">
            <v-col v-for="data in dataHeader" :cols="data.cols" :class="data.class">
              <span class="text-primar font-weight-medium">{{ data.tag }}</span>
            </v-col>
          </v-row>
        </v-list>
        <v-list density="compact" class="bg-maingrey">
          <slot name="dataList"></slot>

        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
