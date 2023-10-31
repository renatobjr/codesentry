import { InferSchemaType, Schema, model, models } from "mongoose";
import { status as userStatus, roles as userRoles } from "../data/users";

const roles = [
  userRoles.ADMIN,
  userRoles.REPORTER,
  userRoles.DEVELOPER,
] as const;

const status = [
  userStatus.WAITING_REGISTER,
  userStatus.WAITING_APPROVAL,
  userStatus.PENDING,
  userStatus.ACTIVE,
  userStatus.DISABLED,
] as const;

type Role = (typeof roles)[number];
type Status = (typeof status)[number];

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

const schema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    avatar: {
      type: String,
      default: null,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: false,
      type: String,
    },
    role: {
      type: String,
      enum: roles,
      default: userRoles.REPORTER,
    },
    firstLogin: {
      type: Boolean,
      default: true,
    },
    token: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: status,
      default: userStatus.WAITING_REGISTER,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export type UserType = InferSchemaType<typeof schema>;
const User = models.User || model<User>("User", schema);

export default User;
