import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import dataUser from "@/data/users";
import userService from "@/service/users";

export const useUserStore = defineStore("user", () => {
  // Reactive state
  let user = ref({
    _id: null,
    name: "",
    email: "",
    avatar: "",
    role: "",
    firstLogin: true,
    status: "pending",
    lastLogin: "",
    projects: [],
    issues: [],
  });
  let userList = ref([]);
  let isLoaded = ref(true);
  let totalUsers = ref(0);

  // Define roles for users
  const roles = [
    { value: dataUser.roles.ADMIN, name: "Admin" },
    { value: dataUser.roles.REPORTER, name: "Reporter" },
    { value: dataUser.roles.DEVELOPER, name: "Developer" },
  ];
  // Define status for users
  const status = [
    { value: dataUser.status.WAITING_REGISTER, name: "Waiting Registration" },
    { value: dataUser.status.WAITING_APPROVAL, name: "Waiting Approval" },
    { value: dataUser.status.PENDING, name: "Pending" },
    { value: dataUser.status.ACTIVE, name: "Active" },
    { value: dataUser.status.DISABLED, name: "Disabled" },
  ]

  // Actions
  async function fetchUsers({ page, itemsPerPage, sortBy }) {
    const response = await userService.fetchUsers();

    if (response) {
      totalUsers.value = response.length;

      return new Promise((resolve) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        userList.value = response.slice();

        if (sortBy.length) {
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
    user.value = await userService.fetchUser(id);
  };
  async function createUser(data) {
    return await userService.createUser(data);
  };
  async function updateUser(data) {
    return await userService.updateUser(data);
  };
  async function deleteUser(id) {
    return await userService.deleteUser(id);
  };
  async function approveUser(id) {
    return await userService.approveUser(id);
  }

  return {
    approveUser,
    createUser,
    deleteUser,
    fetchUser,
    fetchUsers,
    isLoaded,
    roles,
    status,
    totalUsers,
    updateUser,
    user,
    userList,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
