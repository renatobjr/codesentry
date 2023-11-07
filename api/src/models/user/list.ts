/*
  Default JSON return

  _id: string;
  name: string;
  status: string;
  email: string;
  role: string;
  avatar: string;
  issues: Issue[];
  porjects: Project[];
*/

import User from "../../schemas/user";
import Issue from "../../schemas/issue";
import Project from "../../schemas/project";
import apiResponse from "../../utils/apiResponse";
import { status as userStatus } from "../../data/users";
import { status as issueStatus } from "../../data/issues";

const list = async () => {
  try {
    let users = await User.find({ status: { $ne: userStatus.DISABLED } });
    users = await Promise.all(
      users.map(async (user: any) => {
        const dataIssues = await Issue.find({
          $or: [{ assignedTo: user._id }],
        });
        const issues: { assignedTo: Issue[]; resolvedIssues: Issue[] } = {
          assignedTo: [],
          resolvedIssues: [],
        };
        dataIssues.forEach((issue: Issue) => {
          if (issue.state === issueStatus.ASSIGNED) {
            issues.assignedTo.push(issue);
          }
          if (
            issue.state === issueStatus.SOLVED ||
            issue.state === issueStatus.CLOSED
          ) {
            issues.resolvedIssues.push(issue);
          }
        });
        const projects = await Project.find({
          $or: [
            { admin: user._id },
            { reporters: user._id },
            { assignees: user._id },
          ],
        });

        return {
          _id: user._id,
          name: user.name,
          status: user.status,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          issues,
          projects,
        };
      })
    );

    return apiResponse("users/list", 200, users);
  } catch (error: any) {
    return apiResponse("users/list", 400, error.message);
  }
};

export default list;
