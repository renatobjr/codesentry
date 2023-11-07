import Issue from "../../schemas/issue";
import apiResponse from "../../utils/apiResponse";

const list = async (options: any) => {
  try {
    
    if (options.projectId) {
      options = {
        'project': options.projectId
      }
    }
    const issues = await Issue.find(options);
    return apiResponse("issues/list", 200, issues);
  } catch (error: any) {
    return apiResponse("issues/list", 400, error.message);
  }
};

export default list;