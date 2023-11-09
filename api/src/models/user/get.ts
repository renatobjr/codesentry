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
import sanitize from "mongo-sanitize";
import { status as userStatus } from "../../data/users";
import { status as issueStatus } from "../../data/issues";
import Project from "../../schemas/project";

const get = async (id: string) => {
  try {
    let sanitizeId = sanitize(id);
    const user: getUser | null = await User.findOne({ _id: sanitizeId, status: {$ne: userStatus.DISABLED}}).lean();

    if (!user) {
      return apiResponse("users/get", 400, "User not found");
    }

    user.issues = {
      assignedTo: [],
      resolvedIssues: [],
    };
    const dataIssues = await Issue.find({
      assignedTo: user._id,
    });
    
    dataIssues.forEach((issue: Issue) => {
      if (issue.state === issueStatus.ASSIGNED) {
        user.issues.assignedTo.push(issue);
      }
      if (
        issue.state === issueStatus.SOLVED ||
        issue.state === issueStatus.CLOSED
      ) {
        user.issues.resolvedIssues.push(issue);
      }
    })

    user.projects = await Project.find({
      $or: [
        { admin: user._id },
        { reporters: user._id },
        { assignees: user._id },
      ],
    });
    
    return apiResponse('users/get', 200, user);
  } catch (error: any) {
    return apiResponse("users/get", 400, error.message);
  }
}

export default get;