/*
 The main JSON format API Returnable
  {
    id: "1",
    priority: "high",
    state: "open",
    resume: "This is an issue",
    description: "This is a description",
    relator: 'John Doe',
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
        url: "https://www.google.com",
      },
      {
        id: "2",
        name: "file2",
        url: "https://www.google.com",
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
  { title: "Id", key: "id", sortable: true, width: '5%' },
  { title: "Priority", key: "priority", sortable: true, width: '5%' },
  { title: "State", key: "state", sortable: true, width: '12%' },
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
    id: "1",
    priority: "high",
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
    state: "waiting-feedback",
    title: "This is an issue",
    description: "This is a description",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-19",
    stepsToReproduce: "This is how to reproduce",
    attechedFiles: [
      {
        id: "1",
        name: "file1",
        url: "https://www.google.com",
      },
      {
        id: "2",
        name: "file2",
        url: "https://www.google.com",
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
  },
];
