export type IssuePriorityType =
  | "low"
  | "medium"
  | "high"
  | "urgent"
  | undefined;

type IssueType = {
  id?: string;
  assignedTo?: string;
  priority: IssuePriorityType;
  state?: string;
  resume?: string;
  description?: string;
  updatedAt?: string;
};
export default IssueType;
