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

export const dataHeader = [
  { title: "Name", key: "name", width: "10%" },
  { title: "Email", key: "email", width: "20%" },
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
];

export const dataUsers = [
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    resolvedIssues: "12",
    assignedProjects: "2",
    projectsAssigned: "4",
    assignedIssues: "4"
  },
  {
    id: "3",
    name: "John Doe",
    email: "john.doe@example.com",
    resolvedIssues: "8",
    assignedProjects: "3",
    projectsAssigned: "6",
    assignedIssues: "4"
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    resolvedIssues: "15",
    assignedProjects: "5",
    projectsAssigned: "3",
    assignedIssues: "4"
  },
  {
    id: "5",
    name: "Alex Brown",
    email: "alex.brown@example.com",
    resolvedIssues: "10",
    assignedProjects: "4",
    projectsAssigned: "7",
    assignedIssues: "4"
  },
  {
    id: "6",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    resolvedIssues: "18",
    assignedProjects: "6",
    projectsAssigned: "5",
    assignedIssues: "4"
  },
  {
    id: "7",
    name: "Michael Davis",
    email: "michael.davis@example.com",
    resolvedIssues: "9",
    assignedProjects: "2",
    projectsAssigned: "8",
    assignedIssues: "4"
  },
  {
    id: "8",
    name: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    resolvedIssues: "14",
    assignedProjects: "3",
    projectsAssigned: "6",
    assignedIssues: "4"
  },
  {
    id: "9",
    name: "Christopher Miller",
    email: "christopher.miller@example.com",
    resolvedIssues: "11",
    assignedProjects: "5",
    projectsAssigned: "4",
    assignedIssues: "4"
  },
  {
    id: "10",
    name: "Ava Smith",
    email: "ava.smith@example.com",
    resolvedIssues: "13",
    assignedProjects: "4",
    projectsAssigned: "7",
    assignedIssues: "4"
  },
  {
    id: "11",
    name: "Daniel White",
    email: "daniel.white@example.com",
    resolvedIssues: "7",
    assignedProjects: "2",
    projectsAssigned: "9",
    assignedIssues: "4"
  },
  {
    id: "12",
    name: "Sophia Johnson",
    email: "sophia.johnson@example.com",
    resolvedIssues: "16",
    assignedProjects: "6",
    projectsAssigned: "5",
    assignedIssues: "4"
  }
]


