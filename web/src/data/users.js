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
    { title: "Email", key: "email", width: "10%" },
    { title: "Role", key: "role", width: "10%" },
    { title: "Resolved Issues", key: "resolved", width: "5%" },
    { title: "Assignet Issues", key: "assinged", width: "5%" },
    { title: "Projects Assigned", key: "projects", width: "5%" },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      sortable: false,
      width: "10%",
    },
  ],
  mock: [
    {
      id: "1",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      resolvedIssues: "12",
      assignedProjects: "2",
      projectsAssigned: "4",
      assignedIssues: "4"
    },
  ]
}
 export default dataUser;
