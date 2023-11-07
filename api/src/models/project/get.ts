import sanitize from "mongo-sanitize";
import Project from "../../schemas/project";
import User from "../../schemas/user";
import Issue from "../../schemas/issue";
import apiResponse from "../../utils/apiResponse";
import { get as getProject } from "../../@types/project";
import { get as getUser } from "../../@types/user";

const get = async (id: string) => {
  try {
    let sanitizeId = sanitize(id);
    let data: getProject | null = await Project.findOne({ _id: sanitizeId }).lean();

    if (!data) {
      return apiResponse("projects/get", 400, "Project not found");
    }
    const admin: getUser | null = await User.findById(data.admin);
    data.admin = {
      _id: admin?._id,
      name: admin?.name
    };

    const reporters: getUser[] = await User.find({ _id: { $in: data.reporters } });
    data.reporters = reporters.map((reporter: getUser) => {
      return {
        _id: reporter._id,
        name: reporter.name
      }
    });

    data.issues = await Issue.find({ project: data._id });
    
    return apiResponse('projects/get', 200, data);
  } catch (error: any) {
    return apiResponse("projects/get", 400, error.message);
  }
}

export default get;