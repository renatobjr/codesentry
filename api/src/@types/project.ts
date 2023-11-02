import { ObjectId } from "mongoose";

export type create = {
  name: string;
  description: string;
  admin: ObjectId;
  reporters: ObjectId[];
  assignees: ObjectId[];
  language: string;
  database: string;
};