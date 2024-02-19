export type UserStatusType =
  | "WAITING_REGISTER"
  | "WAITING_APPROVAL"
  | "APPROVED"
  | "PENDING"
  | "ACTIVE"
  | "DISABLED"
  | undefined;

export type UserRoleType = "ADMIN" | "REPORTER" | "DEVELOPER";

type UserType = {
  _id: string;
  name: string;
  avatar?: string;
  email: string;
  password: string;
  role: UserRoleType;
  firstLogin: boolean;
  token?: string;
  status: UserStatusType;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
};
export default UserType;
