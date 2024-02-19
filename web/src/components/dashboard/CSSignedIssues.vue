<script lang="ts" setup>
// For development porpuse
import normalize from "@/utils/normalize";

defineProps<{
  issues?: any[]
}>();

const countSignnedIssues = (issues:any[]) => {
  return issues.length;
};

const listSignedIssues = () => {
  console.log("listSignedIssues");
};
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="1" class="bg-maingrey">
      <v-expansion-panel-title>
        <cs-list-header
          title="Signed Issues"
          :action="listSignedIssues"
          :infoChips="{ partial: countSignnedIssues(issues ?? []), total: 90 }"
        />
      </v-expansion-panel-title>
      <div v-for="issue in issues" :key="issue">
        <!-- {{ issue }} -->
        <v-expansion-panel-text>
          <v-row align="center" justify="center">
            <v-col cols="1" align-self="center">
              <v-avatar color="blue-grey" size="32" class="font-weight-bold">{{
                normalize.setAvatar(issue.assignedTo)
              }}</v-avatar>
            </v-col>
            <v-col cols="3">
              <v-icon
                style="margin-left: -1.5px"
                class="d-block"
                size="large"
                :color="normalize.setPriorityIcons(issue.priority).color"
                >{{ normalize.setPriorityIcons(issue.priority).icon }}</v-icon
              >
              <v-icon :class="`${issue.state}-icon`">mdi-square-rounded</v-icon
              ><span class="text-capitalize ml-2">{{
                normalize.formatTags(issue.state)
              }}</span>
            </v-col>
            <v-col cols="3">
              <span class="d-block">{{ issue.resume }}</span>
              <span class="d-block text-caption">
                Assigned to {{ issue.assignedTo }}</span
              >
            </v-col>
            <v-col>
              <span class="d-block">{{ issue.description }}</span>
              <span class="text-caption">Updated at {{ issue.updatedAt }}</span>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
