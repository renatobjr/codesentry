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
const dataProject = {
  header: [
    { title: "Admin", key: "admin", width: "10%" },
    { title: "Project Name", key: "projectName", width: "10%" },
    { title: 'Total tracked issues', key: 'totalTrackedIssues', width: '10%' },
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
  ]
}

export default dataProject;
