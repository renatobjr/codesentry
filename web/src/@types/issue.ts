export type IssuePriorityType =
  | "low"
  | "medium"
  | "high"
  | "urgent"
  | undefined;

export type IssueReproducibilityType =
  | "always"
  | "occasionally"
  | "rarely"
  | "unable"
  | "N/A"
  | undefined;

export type IssueStateType =
  | "unsigned"
  | "open"
  | "assigned"
  | "inProgress"
  | "waitingFeedback"
  | "solved"
  | "closed"
  | "rejected"
  | "duplicate";

export type IssueNoteType = {
  content: string;
  postedBy: string;
  postedAt: string;
};

type IssueType = {
  id?: string;
  resume?: string;
  description?: string;
  project?: string;
  stepsToReproduce?: string;
  priority: IssuePriorityType;
  reproducibility: IssueReproducibilityType;
  state: IssueStateType;
  reporter?: string;
  attachedFiles: any[];
  notes: IssueNoteType[];
  createdAt: string;
  updatedAt?: string;
  assignedTo?: string;
};
export default IssueType;
