type UserStatusType =
  | "WAITING_REGISTER"
  | "WAITING_APPROVAL"
  | "APPROVED"
  | "PENDING"
  | "ACTIVE"
  | "DISABLED"
  | undefined;

type UserType = {
  staus: UserStatusType;
};
export default UserType;
