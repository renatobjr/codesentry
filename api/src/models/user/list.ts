/*
  Default JSON return

  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  projects: ProjectType[];
  issues: IssueType[];
*/

import User from "../../schemas/user";
import Issue from "../../schemas/issue";
import Project from "../../schemas/project";
import apiResponse from "../../utils/apiResponse";

const list = async () => {
  try {
    let users = await User.find({ status: 'active'});
    users = await Promise.all(
      users.map(async (user: any) => {
        const issues = await Issue.find({ assignedTo: user._id, relatedTo: user._id });
        const projects = await Project.find({ admin: user._id, reporters: user._id, assignees: user._id });
        return {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
          issues,
          projects,
        }
      })
    );

    return apiResponse('users/list', 200, users);
  } catch (error: any) {
    return apiResponse('users/list', 400, error.message);
  }
};

export default list;