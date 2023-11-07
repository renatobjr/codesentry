import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import dataIssues from "@/data/issues";
import issueService from "@/service/issues";

export const useIssueStore = defineStore("issue", () => {
  // Reactive state
  let issue = ref({
    _id: null,
    priority: "",
    reproducibility: "",
    resume: "",
    description: "",
    stepsToReproduce: "",
    assignedTo: "",
    files: [],
  });
  let issuesList = ref([]);
  let isLoaded = ref(true);
  let totalIssues = ref(0);

  // Define priority, state and reproducibilty for issues
  const priority = [
    { value: dataIssues.priority.LOW, name: "Low" },
    { value: dataIssues.priority.MEDIUM, name: "Medium" },
    { value: dataIssues.priority.HIGH, name: "High" },
    { value: dataIssues.priority.URGENT, name: "Urgent" },
  ];

  const state = [
    { value: dataIssues.state.OPEN, name: "Open" },
    { value: dataIssues.state.IN_PROGRESS, name: "In Progress" },
    { value: dataIssues.state.WAITING_FEEDBACK, name: "Waiting Feedback" },
    { value: dataIssues.state.SOLVED, name: "Solved" },
    { value: dataIssues.state.CLOSED, name: "Closed" },
    { value: dataIssues.state.REJECTED, name: "Rejected" },
    { value: dataIssues.state.ASSIGNED, name: "Assigned" },
    { value: dataIssues.state.DUPLICATED, name: "Duplicated" },
    { value: dataIssues.state.UNSIGNED, name: "Unsigned" },
  ];

  const reproducibility = [
    { value: dataIssues.reproducibility.ALWAYS, name: "Always" },
    { value: dataIssues.reproducibility.OCCASIONALLY, name: "Occasionally" },
    { value: dataIssues.reproducibility.RARELY, name: "Rarely" },
    { value: dataIssues.reproducibility.UNABLE, name: "Unable" },
    { value: dataIssues.reproducibility.NOT_APPLICABLE, name: "N/A" },
  ];

  // Actions
  async function listIssues(options) {
    issuesList.value = await issueService.fetchIssues(options);
  };
  async function fetchIssues({ page, itemsPerPage, sortBy }) {
    if (issuesList) {
      totalIssues.value = issuesList.value.length;

      return new Promise((resolve) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          issuesList.value.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = issuesList.value.slice(start, end);

        isLoaded.value = false;
        resolve({
          items: paginated,
          total: issuesList.value.length,
        });
      });
    }
  }
  async function createIssue(data) {
    await issueService.createIssue(data);
  }

  return {
    createIssue,
    fetchIssues,
    issue,
    issuesList,
    isLoaded,
    totalIssues,
    priority,
    state,
    reproducibility,
    listIssues
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIssueStore, import.meta.hot));
}
