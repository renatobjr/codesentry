<script lang="ts" setup>
// For development porpuse remeber to create an endpoint to get unsigned issues
import normalize from "@/utils/normalize";

defineProps<{
  issues?: any[];
}>();
const countUnsignedIssues = (issues: any) => {
  return issues.length;
};

const listUnsignedIssues = () => {
  console.log("listUnsignedIssues");
};
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="1" class="bg-maingrey">
      <v-expansion-panel-title>
        <cs-list-header
          title="Unsigned Issues"
          :action="listUnsignedIssues"
          :infoChips="{ partial: countUnsignedIssues(issues), total: 90 }"
          infoColor="bg-warning"
        />
      </v-expansion-panel-title>
      <div v-for="issue in issues" :key="issue">
        <v-expansion-panel-text>
          <v-row align="center" justify="center">
            <v-col cols="1" align-self="center">
              <span class="d-block">{{ issue.id }}</span>
            </v-col>
            <v-col cols="1">
              <v-icon
                style="margin-left: -1.5px"
                class="d-block"
                size="large"
                :color="normalize.setPriorityIcons(issue.priority).color"
                >{{ normalize.setPriorityIcons(issue.priority).icon }}</v-icon
              >
              <v-icon class="unsigned-icon">mdi-square-rounded</v-icon>
            </v-col>
            <v-col cols="3">
              <span class="d-block">{{ issue.resume }}</span>
              <span class="text-caption">Created at {{ issue.createdAt }}</span>
            </v-col>
            <v-col>
              <span>{{ issue.description }}</span>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
        <!-- <v-divider></v-divider> -->
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
