/*
 The main JSON format API Returnable
  {
    id: "1",
    name: "Jane Smith",
    role: "Administrator",
    email: "jane.smith@exemple.com",
    password: "123456",
    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    avatarColor: "#B71C1C"
    assignedIssues: [
      {
        id: "1",
        title: "This is an issue",
      },
      {
        id: "2",
        title: "This is another issue",
      },
      ],
    ],
    assignedProjects: [
      {
        id: "1",
        title: "This is a project",
      },
      {
        id: "2",
        title: "This is another project",
      },
    ],
    permissions: [
      projects: { read: true, write: true, delete: true },
      issues: { read: true, write: true, delete: true },
      users: { read: true, write: true, delete: true },
    ]
    createdAt: "2023-01-01",
*/

const dataUser = {
  header: [
    { title: "Name", key: "name", width: "10%" },
    { title: "Status", key: "status", width: "10%" },
    { title: "Email", key: "email", width: "10%" },
    { title: "Role", key: "role", width: "10%" },
    { title: "Resolved Issues", key: "issues.resolvedIssues", width: "5%" },
    {
      title: "Assignet Issues",
      key: "issues.assignedTo",
      width: "5%",
    },
    { title: "Projects Assigned", key: "projects", width: "5%" },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      sortable: false,
      width: "10%",
    },
  ],
  status: {
    WAITING_REGISTER: "waiting registration",
    WAITING_APPROVAL: "waiting for approval",
    APPROVED: "approved",
    PENDING: "pending",
    ACTIVE: "active",
    DISABLED: "disabled",
  },
  roles: {
    ADMIN: "admin",
    REPORTER: "reporter",
    DEVELOPER: "developer",
  },
};
export default dataUser;
