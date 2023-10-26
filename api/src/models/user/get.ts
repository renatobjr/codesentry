/*
  Default JSON return

  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  projects: ProjectType[];
  issues: IssueType[];
  timestamps fieds,
  lastLogin: Date;
*/

import User from "../../schemas/user";
import Issue from "../../schemas/issue";
import apiResponse from "../../utils/apiResponse";
import { get as getUser }from "../../@types/user";

const get = async (id: string) => {
  try {
    let user:getUser = await User.find({ _id: id, status: 'active'})
      .select("-password")
      .lean()
      .exec()
      .then((u: any) => u[0]);
    user.issues = await Issue.find({ assignedTo: user._id, relatedTo: user._id });

    return apiResponse('users/get', 200, user);
  } catch (error: any) {
    return apiResponse("users/get", 400, error.message);
  }
}

export default get;