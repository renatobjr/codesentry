/*
Default JSON return
  _id: string;
  amdin: User;
  name: string;
  issues: {
    unsigned: number;
    open: number;
    assigned: number;
    in-progress: number;
    waiting-feedback: number;
    solved: number;
    closed: number;
    rejected: number;
    duplicated: number;
  }
*/
import Project from "../../schemas/project";
import Issue from "../../schemas/issue";
import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";

const list = async () => {
  try {
    let projects = await Project.find();
    projects = await Promise.all(
      projects.map(async (project: any) => {
        const admin = await User.findById(project.admin);
        const issues = await Issue.find({ project: project._id });

        return {
          _id: project._id,
          admin: admin.name,
          name: project.name,
          issues: issues
        }
      })
    );
    return apiResponse('projects/list', 200, projects);
  } catch (error: any) {
    return apiResponse('projects/list', 400, error.message);
  }
}

export default list;