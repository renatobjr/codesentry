import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import userService from "@/service/users";

export const useUserStore = defineStore("user", () => {
  // Reactive state
  let user = ref({
    _id: null,
    name: "",
    email: "",
    avatar: "",
    role: "",
    firstLogin: "",
    status: "",
    lastLogin: "",
    projects: [],
    issues: [],
  });
  let userList = ref([]);
  let isLoaded = ref(true);
  let totalUsers = ref(0);

  // Define roles for users
  const roles = ref([
    { value: "admin", name: "Admin" },
    { value: "reporter", name: "Reporter" },
    { value: "developer", name: "Developer" },
  ]);

  // Actions
  async function fetchUsers({ page, itemsPerPage, sortBy }) {
    const response = await userService.fetchUsers();

    if (response.status == 200) {
      totalUsers.value = response.data.length;

      return new Promise((resolve) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        userList.value = response.data.slice();

        if (sortBy.length) {
          console.log(sortBy[0], sortBy.length);
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          userList.value.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = userList.value.slice(start, end);


        isLoaded.value = false;
        resolve({
          items: paginated,
          total: userList.value.length,
        });
      });
    }
  };
  async function fetchUser(id) {
    const response = await userService.fetchUser(id);

    if (response.status == 200) {
      user.value = response.data;
    }
  };
  async function createUser(data) {
    return await userService.createUser(data);
  };
  async function updateUser(data) {
    const response = await userService.updateUser(data);

    if (response.status == 200) {
      return true;
    }
  };
  async function deleteUser(id) {
    const response = await userService.deleteUser(id);

    if (response.status == 200) {
      return true;
    }
  };
  async function approveUser(id) {
    const response = await userService.approveUser(id);

    if (response.status == 200) {
      return true;
    }
  }
  function resetUser() {
    user.value = [];
  };

  return {
    approveUser,
    createUser,
    deleteUser,
    fetchUser,
    fetchUsers,
    isLoaded,
    resetUser,
    roles,
    totalUsers,
    updateUser,
    user,
    userList,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
