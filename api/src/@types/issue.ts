import { ObjectId } from "mongoose";

export type create = {
  priority: string;
  reproducibility: string;
  state: string;
  project: ObjectId;
  resume: string;
  description: string;
  stepsToReproduce: string;
  assignedTo: ObjectId;
  attechedFiles: {};
};