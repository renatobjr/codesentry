/*
 The main JSON format API Returnable
 @TODO: Do a bechmaark to collect the data from others APIs
 {
    id: 2,
    admin: "Jane Smith",
    name: "Project Phoenix",
    admin: "Jane Smith",
    assignedTo: "Jane Smith",
    mainLanguage: "Java",
    database: "PostgreSQL",
    createdAt: "2023-10-18",
    trackedIssues: [
      { data: "25", status: "Open", class: "open" },
      { data: "15", status: "In Progress", class: "in-progress" },
      { data: "10", status: "Waiting Feedback", class: "waiting-feedback" },
      { data: "20", status: "Solved", class: "solved" },
      { data: "10", status: "Closed", class: "closed" },
      { data: "5", status: "Rejected", class: "rejected" },
      { data: "10", status: "Assigned", class: "assigned" },
      { data: "5", status: "Duplicated", class: "duplicated" }
    ]
  },
*/
export const dataHeader = [
  { title: "Admin", key: "admin", width: '10%' },
  { title: "Project Name", key: "projectName", width: '10%' },
  { title: "Tracked Issues", key: "trackedIssues", sortable: false, width: '40%' },
  { title: "Actions", key: "actions", align: 'center', sortable: false, width: '10%' },
];

export const dataProjects = [
  {
    id: 2,
    admin: "Jane Smith",
    projectName: "Project Phoenix",
    createdAt: "2023-10-18T12:00:00.000Z",
    trackedIssues: [
      { data: "25", status: "Open", class: "open" },
      { data: "15", status: "In Progress", class: "in-progress" },
      { data: "10", status: "Waiting Feedback", class: "waiting-feedback" },
      { data: "20", status: "Solved", class: "solved" },
      { data: "10", status: "Closed", class: "closed" },
      { data: "5", status: "Rejected", class: "rejected" },
      { data: "10", status: "Assigned", class: "assigned" },
      { data: "5", status: "Duplicated", class: "duplicated" }
    ]
  },
  {
    id: 3,
    admin: "Alice Johnson",
    projectName: "Project Nebula",
    createdAt: "2023-10-18T12:15:00.000Z",
    trackedIssues: [
      { data: "20", status: "Open", class: "open" },
      { data: "10", status: "In Progress", class: "in-progress" },
      { data: "15", status: "Waiting Feedback", class: "waiting-feedback" },
      { data: "10", status: "Solved", class: "solved" },
      { data: "25", status: "Closed", class: "closed" },
      { data: "5", status: "Rejected", class: "rejected" },
      { data: "5", status: "Assigned", class: "assigned" },
      { data: "10", status: "Duplicated", class: "duplicated" }
    ]
  },
  {
    id: 4,
    admin: "Bob Williams",
    projectName: "Project Odyssey",
    createdAt: "2023-10-18T12:30:00.000Z",
    trackedIssues: [
      { data: "15", status: "Open", class: "open" },
      { data: "20", status: "In Progress", class: "in-progress" },
      { data: "5", status: "Waiting Feedback", class: "waiting-feedback" },
      { data: "25", status: "Solved", class: "solved" },
      { data: "10", status: "Closed", class: "closed" },
      { data: "5", status: "Rejected", class: "rejected" },
      { data: "10", status: "Assigned", class: "assigned" },
      { data: "10", status: "Duplicated", class: "duplicated" }
    ]
  },
  {
    id: 5,
    admin: "Eva Davis",
    projectName: "Project Quantum",
    createdAt: "2023-10-18T12:45:00.000Z",
    trackedIssues: [
      { data: "10", status: "Open", class: "open" },
      { data: "25", status: "In Progress", class: "in-progress" },
      { data: "20", status: "Waiting Feedback", class: "waiting-feedback" },
      { data: "15", status: "Solved", class: "solved" },
      { data: "5", status: "Closed", class: "closed" },
      { data: "10", status: "Rejected", class: "rejected" },
      { data: "5", status: "Assigned", class: "assigned" },
      { data: "10", status: "Duplicated", class: "duplicated" }
    ]
  },
  {
    id: 6,
    admin: "Mike Brown",
    projectName: "Project Eclipse",
    createdAt: "2023-10-18T13:00:00.000Z",
    trackedIssues: [
      { data: "20", status: "Open", class: "open" },
      { data: "15", status: "In Progress", class: "in-progress" },
      { data: "10", status: "Waiting Feedback", class: "waiting-feedback" },
      { data: "10", status: "Solved", class: "solved" },
      { data: "25", status: "Closed", class: "closed" },
      { data: "5", status: "Rejected", class: "rejected" },
      { data: "5", status: "Assigned", class: "assigned" },
      { data: "10", status: "Duplicated", class: "duplicated" }
    ]
  }
]
