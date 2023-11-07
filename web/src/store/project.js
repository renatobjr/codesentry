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
    issues: []
  });
  let projectList = ref([]);
  let isLoaded = ref(true);
  let totalProjects = ref(0);

  // Actions
  async function listProjects() {
    projectList.value = await projectService.fetchProjects();
  };
  async function fetchProjects({ page, itemsPerPage, sortBy}) {
    const response = await projectService.fetchProjects();

    if (response) {
      totalProjects.value = response.length;

      return new Promise((resolve) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        projectList.value = response.slice();
        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          projectList.value.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = projectList.value.slice(start, end);

        isLoaded.value = false;
        resolve({
          items: paginated,
          total: projectList.value.length,
        });
      });
    }
  };
  async function fetchProject(id) {
    project.value = await projectService.fetchProject(id);
  };
  async function createProject(project) {
    return await projectService.createProject(project);
  };
  async function updateProject(project) {
    return await projectService.updateProject(project);
  };
  async function deleteProject(id) {
    return await projectService.deleteProject(id);
  }

  return {
    createProject,
    deleteProject,
    fetchProject,
    fetchProjects,
    isLoaded,
    project,
    projectList,
    totalProjects,
    updateProject,
    listProjects,
  }
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
