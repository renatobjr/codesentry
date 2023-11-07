import Project from "../../schemas/project";
import apiResponse from "../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const remove = async(id: string) => {
  try {
    const sanitizedId = sanitize(id);
    await Project.deleteOne({ _id: sanitizedId });

    return apiResponse("projects/remove", 200, true);
  } catch (error: any) {
    return apiResponse("projects/remove", 400, error.message);
  }
}

export default remove;