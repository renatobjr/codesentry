export const dataHeader = [
  { cols: "2", tag: "Admin" },
  { cols: "2", tag: "Project Name" },
  { cols: "6", tag: "Tracked Issues" },
  { cols: "2", tag: "Actions", class: "d-flex justify-center" },
];

export const dataLegends = [
  { tag: "Open", class: "open" },
  { tag: "In Progress", class: "inProgress" },
  { tag: "Watingn feedback", class: "waitingFeedback" },
  { tag: "Solved", class: "solved" },
  { tag: "Closed", class: "closed" },
  { tag: "Rejected", class: "rejected" },
  { tag: "Assigned", class: "assigned" },
  { tag: "Duplicated", class: "duplicated" },
]

export const dataProjects = [
  {
    id: 2,
    admin: "Jane Smith",
    projectName: "Project Phoenix",
    createdAt: "2023-10-18T12:00:00.000Z",
    trackedIssues: [
      { data: "25", status: "Open", class: "open" },
      { data: "15", status: "In Progress", class: "inProgress" },
      { data: "10", status: "Waiting Feedback", class: "waitingFeedback" },
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
      { data: "10", status: "In Progress", class: "inProgress" },
      { data: "15", status: "Waiting Feedback", class: "waitingFeedback" },
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
      { data: "20", status: "In Progress", class: "inProgress" },
      { data: "5", status: "Waiting Feedback", class: "waitingFeedback" },
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
      { data: "25", status: "In Progress", class: "inProgress" },
      { data: "20", status: "Waiting Feedback", class: "waitingFeedback" },
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
      { data: "15", status: "In Progress", class: "inProgress" },
      { data: "10", status: "Waiting Feedback", class: "waitingFeedback" },
      { data: "10", status: "Solved", class: "solved" },
      { data: "25", status: "Closed", class: "closed" },
      { data: "5", status: "Rejected", class: "rejected" },
      { data: "5", status: "Assigned", class: "assigned" },
      { data: "10", status: "Duplicated", class: "duplicated" }
    ]
  }
]
