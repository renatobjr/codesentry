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
    const user: getUser | null = await User.findOne({ _id: id, status: 'active'}).lean();

    if (!user) {
      return apiResponse("users/get", 400, "User not found");
    }

    user.issues = await Issue.find({ assignedTo: user._id, relatedTo: user._id });
    
    return apiResponse('users/get', 200, user);
  } catch (error: any) {
    return apiResponse("users/get", 400, error.message);
  }
}

export default get;