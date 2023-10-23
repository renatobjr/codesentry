/*
 The main JSON format API Returnable
 @TODO: Do a bechmaark to collect the data from others APIs
 {
    id: 3,
    admin: "John Doe",
    name: "Project Orion",
    mainLanguage: "Python",
    database: "MySQL",
    createdAt: "2023-10-19",
    trackedIssues: [
      {
        id: "4",
        priority: "medium",
        state: "open",
        resume: "Bug in Module A",
        description: "description of a medium-priority unsigned task",
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
        id: "5",
        state: "closed",
        priority: "low",
        resume: "Feature Request: User Authentication",
        description: "description of an unsigned issue",
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
        id: "6",
        state: "open",
        priority: "high",
        resume: "Performance Issue in API Endpoint",
        description: "description of an unsigned issue",
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
    ],
  },
*/
export const dataHeader = [
  { title: "Admin", key: "admin", width: "10%" },
  { title: "Project Name", key: "projectName", width: "10%" },
  {
    title: "Tracked Issues",
    key: "trackedIssues",
    sortable: false,
    width: "40%",
  },
  {
    title: "Actions",
    key: "actions",
    align: "center",
    sortable: false,
    width: "10%",
  },
];

export const dataProjects = [
  {
    id: 3,
    admin: "John Doe",
    name: "Project Orion",
    mainLanguage: "Python",
    database: "MySQL",
    createdAt: "2023-10-19",
    trackedIssues: [
      {
        id: "4",
        priority: "medium",
        state: "open",
        resume: "Bug in Module A",
        description: "description of a medium-priority unsigned task",
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
        id: "5",
        state: "closed",
        priority: "low",
        resume: "Feature Request: User Authentication",
        description: "description of an unsigned issue",
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
        id: "6",
        state: "open",
        priority: "high",
        resume: "Performance Issue in API Endpoint",
        description: "description of an unsigned issue",
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
    ],
  },
  {
    id: 4,
    admin: "Emily Johnson",
    name: "Project Nebula",
    mainLanguage: "JavaScript",
    database: "MongoDB",
    createdAt: "2023-10-20",
    trackedIssues: [
      {
        id: "7",
        state: "closed",
        priority: "medium",
        resume: "UI Bug in Dashboard",
        description: "description of another unsigned issue",
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
        id: "8",
        state: "open",
        priority: "high",
        resume: "Backend Refactoring Task",
        description: "description of another unsigned issue",
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
        id: "9",
        state: "open",
        priority: "low",
        resume: "Integration with External API",
        description: "description of another unsigned issue",
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
    ],
  },
  {
    id: 5,
    admin: "Alex Brown",
    name: "Project Odyssey",
    mainLanguage: "C#",
    database: "Microsoft SQL Server",
    createdAt: "2023-10-21",
    trackedIssues: [
      {
        id: "10",
        state: "waiting-feedback",
        priority: "high",
        resume: "Security Vulnerability in Authentication Module",
        description: "description of an unsigned task",
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
        id: "11",
        state: "solved",
        priority: "low",
        resume: "Usability Improvement: Add Dark Mode",
        description: "description of an unsigned task",
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
        state: "unsigned",
        priority: "medium",
        resume: "Database Connection Issue",
        description: "description of another unsigned task",
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
    ],
  },
  {
    id: 6,
    admin: "Alex Brown",
    name: "Project Legacy",
    mainLanguage: "C#",
    database: "Microsoft SQL Server",
    createdAt: "2023-10-21",
    trackedIssues: [],
  },
];
