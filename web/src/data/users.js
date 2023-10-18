export const dataHeader = [
  { cols: "3", tag: "User" },
  { cols: "3", tag: "Projects" },
  { cols: "3", tag: "Asignned Issues" },
  { cols: "3", tag: "Actions" },
];

export const dataUsers = [
  {
    id: "2",
    name: "Jane Smith",
    projects: [
      { id: "3", name: "DataAnalyzer Project" },
      { id: "4", name: "DataAnalyzer Project - Phase 2" },
    ],
    assignedIssues: [
      { id: "3", name: "Issue 3", status: "open", priority: "high" },
      { id: "4", name: "Issue 4", status: "inProgress", priority: "medium" },
    ],
  },
  {
    id: "3",
    name: "Alice Johnson",
    projects: [
      { id: "5", name: "SecurityGuard Project" },
      { id: "6", name: "SecurityGuard Project - Phase 2" },
    ],
    assignedIssues: [
      { id: "5", name: "Issue 5", status: "open", priority: "low" },
      { id: "6", name: "Issue 6", status: "closed", priority: "high" },
    ],
  },
  {
    id: "4",
    name: "Bob Williams",
    projects: [
      { id: "7", name: "AutomationHub Project" },
      { id: "8", name: "AutomationHub Project - Phase 2" },
    ],
    assignedIssues: [
      { id: "7", name: "Issue 7", status: "inProgress", priority: "medium" },
      { id: "8", name: "Issue 8", status: "open", priority: "low" },
    ],
  },
  {
    id: "5",
    name: "Eva Davis",
    projects: [
      { id: "9", name: "ReportMaster Project" },
      { id: "10", name: "ReportMaster Project - Phase 2" },
    ],
    assignedIssues: [
      { id: "9", name: "Issue 9", status: "closed", priority: "high" },
      { id: "10", name: "Issue 10", status: "open", priority: "low" },
    ],
  },
  {
    id: "6",
    name: "Mike Brown",
    projects: [
      { id: "11", name: "CollaborateNet Project" },
      { id: "12", name: "CollaborateNet Project - Phase 2" },
    ],
    assignedIssues: [
      { id: "11", name: "Issue 11", status: "inProgress", priority: "medium" },
      { id: "12", name: "Issue 12", status: "closed", priority: "high" },
    ],
  },
];
