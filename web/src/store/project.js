import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import projectService from "@/service/project";

export const useProjectStore = defineStore("project", () => {
  // Reactive state
  let project = ref({
    _id: null,
    name: "",
    description: "",
    admin: "",
    reporters: [],
    assignees: [],
    mainLanguage: "",
    mainDatabase: "",
  });
  let projectList = ref([]);
  let totalProjects = ref(0);;

  // Actions
  async function listProjects() {
    // projectList.value = await userService.fetchProjects();
  };
  async function fetchProjects({ page, itemsPerPage, sortBy}) {};
  async function fetchProject(id) {};
  async function createProject(project) {
    return await projectService.createProject(project);
  };

  return {
    project,
    projectList,
    totalProjects,
    createProject,
  }
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
