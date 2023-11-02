import Project from "../../schemas/project";
import apiResponse from "../../utils/apiResponse";
import { create as createType } from "../../@types/project"

const create = async (payload:createType) => {
  try {
    const project = await Project.create(payload);

    if (!project)
      return apiResponse('project/create', 400, 'Error creating project');
    return apiResponse('project/create', 200, project);
  } catch (error: any) {
    return apiResponse('project/create', 400, error.message)
  }
}

export default create;