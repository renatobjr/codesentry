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

export type get = {
  _id: string;
  name: string;
  description: string;
  admin: {};
  reporters: { _id: string; name: string }[];
  assignees: ObjectId[];
  mainLanguage: string;
  mainDatabase: string;
  issues: Object[];
};