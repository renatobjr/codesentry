import Project from "../../schemas/project";
import apiResponse from "../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const update = async (id: string, payload: any) => {
  try {
    const sanitizedId = sanitize(id);
    const project = await Project.findById(sanitizedId);

    if (!project) return apiResponse("projects/update", 400, "Project not found");

    await Project.updateOne(
      { _id: project._id },
      payload.project
    )
    return apiResponse("projects/update", 200, "Project updated");
  } catch (error: any) {
    return apiResponse("projects/update", 400, error.message);
  }
}

export default update;