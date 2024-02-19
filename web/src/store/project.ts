import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import projectService from "@/service/project";

export const useProjectStore = defineStore("project", () => {
  // Reactive state
  let project = ref({
    _id: null,
    name: "",
    description: "",
    admin: "" as any,
    reporters: [] as any,
    assignees: [],
    mainLanguage: "",
    mainDatabase: "",
    issues: [],
    createdAt: "" as any,
  });
  let projectList = ref([]);
  let totalProjects = ref(0);

  // Actions
  async function listProjects() {
    projectList.value = await projectService.fetchProjects();
  }
  async function fetchProjects({
    page,
    itemsPerPage,
    sortBy,
  }: {
    page: any;
    itemsPerPage: any;
    sortBy: any;
  }) {
    if (projectList) {
      totalProjects.value = projectList.value.length;

      return new Promise((resolve) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          projectList.value.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];

            if (sortOrder === "asc") {
              return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            } else {
              return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
            }
          });
        }

        const paginated = projectList.value.slice(start, end);

        resolve({
          items: paginated,
          total: projectList.value.length,
        });
      });
    }
  }
  async function fetchProject(id: any) {
    project.value = await projectService.fetchProject(id);
  }
  async function createProject(project: any) {
    return await projectService.createProject(project);
  }
  async function updateProject(project: any) {
    return await projectService.updateProject(project);
  }
  async function deleteProject(id: any) {
    return await projectService.deleteProject(id);
  }

  return {
    createProject,
    deleteProject,
    fetchProject,
    fetchProjects,
    project,
    projectList,
    totalProjects,
    updateProject,
    listProjects,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
