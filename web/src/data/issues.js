/*
 The main JSON format API Returnable
  {
    id: "1",
    project: "This is a project",
    priority: "high",
    state: "open",
    resume: "This is an issue",
    reproducibility: "always",
    description: "This is a description",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "This is how to reproduce",
    notes: [
      {
        id: "1",
        content: "This is a note",
      },
      {
        id: "2",
        content: "This is another note",
      },
    ],
    attechedFiles: [
      {
        id: "1",
        name: "file1",
        url: "https://www.keycdn.com/img/support/image-processing-lg.webp",
      },
      {
        id: "2",
        name: "file2",
        url: "https://www.keycdn.com/img/support/image-processing-lg.webp",
      },
    ],
    relatedTo: [
      {
        id: "2",
        title: "This is an issue",
      },
      {
        id: "3",
        title: "This is another issue",
      },
    ],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-19",
    closedAt: "2023-01-19",
  },
*/

export const dataHeader = [
  { title: "Id", key: "id", sortable: true, width: '1%' },
  { title: "Priority", key: "priority", sortable: true, width: '1%' },
  { title: "State", key: "state", sortable: true, width: '11%' },
  { title: "Files", key: "files", sortable: true, width: '2%', align: 'center', sortable: false },
  { title: "Notes", key: "notes", width: '2%', align: 'center', sortable: false },
  { title: "Created At", key: "createdAt", sortable: true, width: '10%' },
  { title: "Updated At", key: "updatedAt", sortable: true, width: '10%' },
  { title: "Working Days", key: "workingDays", sortable: true, width: '10%' },
  { title: "Description", key: "description", sortable: true },
  { title: "Actions", key: "actions", width: '10%', align: 'center', sortable: false },
];

export const dataIssues = [
  {
    id: "2",
    project: "Project XYZ",
    priority: "medium",
    state: "in-progress",
    resume: "Issue in Module A",
    reproducibility: "occasionally",
    description: "Detailed description of the issue in Module A",
    reporter: 'Jane Smith',
    assignedTo: 'John Smith',
    stepsToReproduce: "Steps to reproduce the issue in Module A",
    notes: [
      {
        id: "3",
        content: "Note about the issue in Module A",
      },
      {
        id: "4",
        content: "Additional note for the issue in Module A",
      },
    ],
    attachedFiles: [
      {
        id: "3",
        name: "document.pdf",
        url: "https://www.keycdn.com/img/support/image-processing-lg.webp",
      },
    ],
    relatedTo: [
      {
        id: "4",
        title: "Bug in Module B",
      },
      {
        id: "5",
        title: "Feature Request: Module C",
      },
    ],
    createdAt: "2023-02-15",
    updatedAt: "2023-03-05",
    closedAt: null,
  },
  {
    id: "3",
    project: "Project ABC",
    priority: "low",
    state: "closed",
    resume: "Resolved Bug",
    reproducibility: "rarely",
    description: "Bug that has been successfully resolved",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "No longer applicable",
    notes: [
      {
        id: "5",
        content: "Additional information after resolution",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "6",
        title: "Closed Feature Request: Module D",
      },
    ],
    createdAt: "2023-03-10",
    updatedAt: "2023-03-12",
    closedAt: "2023-03-12",
  },
  {
    id: "4",
    project: "Project QWERTY",
    priority: "high",
    state: "open",
    resume: "Critical Security Vulnerability",
    reproducibility: "always",
    description: "Critical security vulnerability that requires immediate attention",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Steps to reproduce the security vulnerability",
    notes: [
      {
        id: "6",
        content: "Important note regarding the security vulnerability",
      },
    ],
    attachedFiles: [
      {
        id: "4",
        name: "screenshot.png",
        url: "https://example.com/screenshot.png",
      },
    ],
    relatedTo: [],
    createdAt: "2023-04-01",
    updatedAt: "2023-04-02",
    closedAt: null,
  },
  {
    id: "5",
    project: "Project Phoenix",
    priority: "medium",
    state: "in-progress",
    resume: "Ongoing Feature Development",
    reproducibility: "not applicable",
    description: "Feature development in progress with regular updates",
    reporter: 'Jane Smith',
    assignedTo: 'John Smith',
    stepsToReproduce: "Not applicable for ongoing feature development",
    notes: [
      {
        id: "7",
        content: "Note about the ongoing feature development",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "2",
        title: "Issue in Module A",
      },
    ],
    createdAt: "2023-05-15",
    updatedAt: "2023-05-20",
    closedAt: null,
  },
  {
    id: "6",
    project: "Project Delta",
    priority: "low",
    state: "open",
    resume: "Simple User Feedback",
    reproducibility: "not applicable",
    description: "Basic user feedback with minimal details",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "Not applicable for user feedback",
    notes: [],
    attachedFiles: [],
    relatedTo: [
      {
        id: "4",
        title: "Critical Security Vulnerability",
      },
    ],
    createdAt: "2023-06-10",
    updatedAt: "2023-06-15",
    closedAt: null,
  },
  {
    id: "7",
    project: "Project Omega",
    priority: "medium",
    state: "waiting-feedback",
    resume: "Feature Enhancement Request",
    reproducibility: "not applicable",
    description: "Request for enhancing an existing feature",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Not applicable for feature enhancement request",
    notes: [
      {
        id: "8",
        content: "Note about potential improvements",
      },
    ],
    attachedFiles: [
      {
        id: "5",
        name: "proposal.docx",
        url: "https://example.com/proposal.docx",
      },
    ],
    relatedTo: [
      {
        id: "3",
        title: "Resolved Bug",
      },
    ],
    createdAt: "2023-07-01",
    updatedAt: "2023-07-05",
    closedAt: null,
  },
  {
    id: "8",
    project: "Project Lambda",
    priority: "high",
    state: "open",
    resume: "Critical Database Issue",
    reproducibility: "always",
    description: "Critical issue related to database connectivity",
    reporter: 'Jane Smith',
    assignedTo: 'John Smith',
    stepsToReproduce: "Steps to reproduce the database issue",
    notes: [
      {
        id: "9",
        content: "Note about the critical database issue",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "10",
        title: "Related Database Task",
      },
    ],
    createdAt: "2023-08-10",
    updatedAt: "2023-08-15",
    closedAt: null,
  },
  {
    id: "9",
    project: "Project Gamma",
    priority: "low",
    state: "closed",
    resume: "Resolved User Request",
    reproducibility: "not applicable",
    description: "User request that has been successfully resolved",
    reporter: 'Alex Brown',
    assignedTo: 'Emily Johnson',
    stepsToReproduce: "No longer applicable",
    notes: [
      {
        id: "10",
        content: "Additional information after resolution",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "11",
        title: "Closed User Feedback",
      },
    ],
    createdAt: "2023-09-01",
    updatedAt: "2023-09-05",
    closedAt: "2023-09-05",
  },
  {
    id: "10",
    project: "Project Sigma",
    priority: "medium",
    state: "in-progress",
    resume: "Ongoing Performance Optimization",
    reproducibility: "not applicable",
    description: "Performance optimization in progress with regular updates",
    reporter: 'John Smith',
    assignedTo: 'Jane Smith',
    stepsToReproduce: "Not applicable for ongoing optimization",
    notes: [
      {
        id: "11",
        content: "Note about the ongoing optimization",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "5",
        title: "Ongoing Feature Development",
      },
    ],
    createdAt: "2023-10-01",
    updatedAt: "2023-10-05",
    closedAt: null,
  },
  {
    id: "11",
    project: "Project Theta",
    priority: "high",
    state: "open",
    resume: "Critical Bug in Module X",
    reproducibility: "always",
    description: "Critical bug that needs immediate attention in Module X",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "Steps to reproduce the critical bug in Module X",
    notes: [
      {
        id: "12",
        content: "Important note about the critical bug",
      },
    ],
    attachedFiles: [
      {
        id: "6",
        name: "error-log.txt",
        url: "https://example.com/error-log.txt",
      },
    ],
    relatedTo: [],
    createdAt: "2023-11-01",
    updatedAt: "2023-11-02",
    closedAt: null,
  },
  {
    id: "12",
    project: "Project Phi",
    priority: "medium",
    state: "closed",
    resume: "Resolved Feature Request: Module Y",
    reproducibility: "not applicable",
    description: "Feature request that has been successfully resolved in Module Y",
    reporter: 'Alex Brown',
    assignedTo: 'Emily Johnson',
    stepsToReproduce: "No longer applicable",
    notes: [
      {
        id: "13",
        content: "Additional information after resolution",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "14",
        title: "Closed Bug in Module Z",
      },
    ],
    createdAt: "2023-12-01",
    updatedAt: "2023-12-05",
    closedAt: "2023-12-05",
  }
]


export const unsignedIssues = [
  {
    id: "8",
    priority: "medium",
    state: "unsigned",
    resume: "Unsigned Issue 1",
    description: "Description of an unsigned issue",
    reporter: 'Jane Doe',
    assignedTo: 'John Doe',
    stepsToReproduce: "Steps to reproduce the unsigned issue",
    notes: [
      {
        id: "3",
        content: "Note about the unsigned issue",
      },
      {
        id: "4",
        content: "Additional note for the unsigned issue",
      },
    ],
    attachedFiles: [
      {
        id: "3",
        name: "document.pdf",
        url: "https://example.com/document.pdf",
      },
    ],
    relatedTo: [
      {
        id: "5",
        title: "Related Issue X",
      },
      {
        id: "6",
        title: "Related Issue Y",
      },
    ],
    createdAt: "2023-02-15",
    updatedAt: "2023-03-05",
    closedAt: null,
  },
  {
    id: "9",
    priority: "low",
    state: "unsigned",
    resume: "Unsigned Issue 2",
    description: "Description of another unsigned issue",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Steps to reproduce the second unsigned issue",
    notes: [
      {
        id: "5",
        content: "Note about the second unsigned issue",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "7",
        title: "Related Issue Z",
      },
    ],
    createdAt: "2023-03-10",
    updatedAt: "2023-03-12",
    closedAt: null,
  },
  {
    id: "10",
    priority: "high",
    state: "unsigned",
    resume: "Unsigned Issue 3",
    description: "Description of a high-priority unsigned issue",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "Steps to reproduce the high-priority unsigned issue",
    notes: [
      {
        id: "6",
        content: "Important note for the high-priority unsigned issue",
      },
    ],
    attachedFiles: [
      {
        id: "4",
        name: "screenshot.png",
        url: "https://example.com/screenshot.png",
      },
    ],
    relatedTo: [],
    createdAt: "2023-04-01",
    updatedAt: "2023-04-02",
    closedAt: null,
  },
  {
    id: "11",
    priority: "medium",
    state: "unsigned",
    resume: "Unsigned Task 1",
    description: "Description of an unsigned task",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Not applicable for an unsigned task",
    notes: [
      {
        id: "7",
        content: "Note about the unsigned task",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "8",
        title: "Related Task X",
      },
    ],
    createdAt: "2023-05-15",
    updatedAt: "2023-05-20",
    closedAt: null,
  },
  {
    id: "12",
    priority: "low",
    state: "unsigned",
    resume: "Unsigned Task 2",
    description: "Description of another unsigned task",
    reporter: 'Alex Brown',
    assignedTo: 'Emily Johnson',
    stepsToReproduce: "Not applicable for the second unsigned task",
    notes: [],
    attachedFiles: [],
    relatedTo: [
      {
        id: "9",
        title: "Related Task Y",
      },
    ],
    createdAt: "2023-06-10",
    updatedAt: "2023-06-15",
    closedAt: null,
  },
  {
    id: "13",
    priority: "medium",
    state: "unsigned",
    resume: "Unsigned Task 3",
    description: "Description of a medium-priority unsigned task",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "Not applicable for the high-priority unsigned task",
    notes: [
      {
        id: "8",
        content: "Important note for the unsigned task",
      },
    ],
    attachedFiles: [
      {
        id: "5",
        name: "document.docx",
        url: "https://example.com/document.docx",
      },
    ],
    relatedTo: [],
    createdAt: "2023-07-01",
    updatedAt: "2023-07-05",
    closedAt: null,
  },
  {
    id: "14",
    priority: "high",
    state: "unsigned",
    resume: "Unsigned Issue 4",
    description: "Description of another unsigned issue",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Steps to reproduce the third unsigned issue",
    notes: [
      {
        id: "9",
        content: "Note about the third unsigned issue",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "10",
        title: "Related Issue W",
      },
    ],
    createdAt: "2023-08-10",
    updatedAt: "2023-08-15",
    closedAt: null,
  },
  {
    id: "15",
    priority: "low",
    state: "unsigned",
    resume: "Unsigned Task 4",
    description: "Description of another unsigned task",
    reporter: 'Alex Brown',
    assignedTo: 'Emily Johnson',
    stepsToReproduce: "Not applicable for the fourth unsigned task",
    notes: [],
    attachedFiles: [],
    relatedTo: [
      {
        id: "11",
        title: "Related Task Z",
      },
    ],
    createdAt: "2023-09-01",
    updatedAt: "2023-09-05",
    closedAt: null,
  },
]

export const signedIssues = [
  {
    id: "8",
    priority: "medium",
    state: 'in-progress',
    resume: "Unsigned Issue 1",
    description: "Description of an unsigned issue",
    reporter: 'Jane Doe',
    assignedTo: 'John Doe',
    stepsToReproduce: "Steps to reproduce the unsigned issue",
    notes: [
      {
        id: "3",
        content: "Note about the unsigned issue",
      },
      {
        id: "4",
        content: "Additional note for the unsigned issue",
      },
    ],
    attachedFiles: [
      {
        id: "3",
        name: "document.pdf",
        url: "https://example.com/document.pdf",
      },
    ],
    relatedTo: [
      {
        id: "5",
        title: "Related Issue X",
      },
      {
        id: "6",
        title: "Related Issue Y",
      },
    ],
    createdAt: "2023-02-15",
    updatedAt: "2023-03-05",
    closedAt: null,
  },
  {
    id: "9",
    priority: "low",
    state: 'in-progress',
    resume: "Unsigned Issue 2",
    description: "Description of another unsigned issue",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Steps to reproduce the second unsigned issue",
    notes: [
      {
        id: "5",
        content: "Note about the second unsigned issue",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "7",
        title: "Related Issue Z",
      },
    ],
    createdAt: "2023-03-10",
    updatedAt: "2023-03-12",
    closedAt: null,
  },
  {
    id: "10",
    priority: "high",
    state: 'solved',
    resume: "Unsigned Issue 3",
    description: "Description of a high-priority unsigned issue",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "Steps to reproduce the high-priority unsigned issue",
    notes: [
      {
        id: "6",
        content: "Important note for the high-priority unsigned issue",
      },
    ],
    attachedFiles: [
      {
        id: "4",
        name: "screenshot.png",
        url: "https://example.com/screenshot.png",
      },
    ],
    relatedTo: [],
    createdAt: "2023-04-01",
    updatedAt: "2023-04-02",
    closedAt: null,
  },
  {
    id: "11",
    priority: "medium",
    state: 'solved',
    resume: "Unsigned Task 1",
    description: "Description of an unsigned task",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Not applicable for an unsigned task",
    notes: [
      {
        id: "7",
        content: "Note about the unsigned task",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "8",
        title: "Related Task X",
      },
    ],
    createdAt: "2023-05-15",
    updatedAt: "2023-05-20",
    closedAt: null,
  },
  {
    id: "12",
    priority: "low",
    state: 'waiting-feedback',
    resume: "Unsigned Task 2",
    description: "Description of another unsigned task",
    reporter: 'Alex Brown',
    assignedTo: 'Emily Johnson',
    stepsToReproduce: "Not applicable for the second unsigned task",
    notes: [],
    attachedFiles: [],
    relatedTo: [
      {
        id: "9",
        title: "Related Task Y",
      },
    ],
    createdAt: "2023-06-10",
    updatedAt: "2023-06-15",
    closedAt: null,
  },
  {
    id: "13",
    priority: "medium",
    state: 'waiting-feedback',
    resume: "Unsigned Task 3",
    description: "Description of a medium-priority unsigned task",
    reporter: 'Emily Johnson',
    assignedTo: 'Alex Brown',
    stepsToReproduce: "Not applicable for the high-priority unsigned task",
    notes: [
      {
        id: "8",
        content: "Important note for the unsigned task",
      },
    ],
    attachedFiles: [
      {
        id: "5",
        name: "document.docx",
        url: "https://example.com/document.docx",
      },
    ],
    relatedTo: [],
    createdAt: "2023-07-01",
    updatedAt: "2023-07-05",
    closedAt: null,
  },
  {
    id: "14",
    priority: "high",
    state: 'duplicated',
    resume: "Unsigned Issue 4",
    description: "Description of another unsigned issue",
    reporter: 'John Doe',
    assignedTo: 'Jane Doe',
    stepsToReproduce: "Steps to reproduce the third unsigned issue",
    notes: [
      {
        id: "9",
        content: "Note about the third unsigned issue",
      },
    ],
    attachedFiles: [],
    relatedTo: [
      {
        id: "10",
        title: "Related Issue W",
      },
    ],
    createdAt: "2023-08-10",
    updatedAt: "2023-08-15",
    closedAt: null,
  },
  {
    id: "15",
    priority: "low",
    state: 'closed',
    resume: "Unsigned Task 4",
    description: "Description of another unsigned task",
    reporter: 'Alex Brown',
    assignedTo: 'Emily Johnson',
    stepsToReproduce: "Not applicable for the fourth unsigned task",
    notes: [],
    attachedFiles: [],
    relatedTo: [
      {
        id: "11",
        title: "Related Task Z",
      },
    ],
    createdAt: "2023-09-01",
    updatedAt: "2023-09-05",
    closedAt: null,
  },
]
