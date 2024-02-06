<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  infoChips: {
    type: Object,
    required: false,
  },
  infoColor: {
    type: String,
    required: false,
    default: "bg-success",
  },
  action: {
    type: Function,
    required: false,
  },
});
</script>

<template>
  <v-row>
    <v-col>
      <span class="text-h6 mr-8 font-weight-light">{{ title }}</span>
      <v-chip v-if="infoChips" label :class="infoColor">
        {{ infoChips.partial }}/{{ infoChips.total }}
      </v-chip>
      <v-btn
        v-if="action"
        class="float-right mr-8"
        flat
        color="primary"
        @click.native.stop="action"
      >
        see all
      </v-btn>
    </v-col>
  </v-row>
</template>
