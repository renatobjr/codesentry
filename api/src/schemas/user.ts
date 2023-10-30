import { InferSchemaType, Schema, model, models } from "mongoose";

const roles = ["admin", "reporter", "developer"] as const;
const status = ["waiting registration", "waiting approval", "active", "disabled"] as const;

type Role = typeof roles[number];
type Status = typeof status[number];

interface User extends Document {
  name: string;
  avatar?: string;
  email: string;
  password: string;
  role: Role;
  status: Status;
  firstLogin: boolean;
  token: string;
}

const schema = new Schema({
  name: {
    required: true,
    type: String
  },
  avatar: {
    type: String,
    default: null
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: false,
    type: String
  },
  role: {
    required: true,
    type: String,
    enum: roles,
    default: "developer"
  },
  firstLogin: {
    type: Boolean,
    default: true,
  },
  token: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: status,
    default: "waiting registration"
  },
  lastLogin: {
    type: Date,
    default: null
  },
},{ timestamps: true });

export type UserType = InferSchemaType<typeof schema>;
const User = models.User || model<User>("User", schema);

export default User;