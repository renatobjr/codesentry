import Issue from "../../schemas/issue";
import apiResponse from "../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const update = async (id: string, payload: any) => {
  try {
    const sanitizedId = sanitize(id);
    const issue = await Issue.findById(sanitizedId);

    if (!issue) return apiResponse("issues/update", 400, "Issue not found");
    
    payload.issue.previewFiles = payload.issue.previewFiles.filter(
      (file:any) => !Object.keys(file).includes('preview')
    );
        
    Array.prototype.push.apply(
      payload.issue.attachedFiles,
      payload.issue.previewFiles
    );

    await Issue.updateOne(
      { _id: issue._id },
      payload.issue
    )
    return apiResponse("issues/update", 200, "Issue updated");
  } catch (error: any) {
    return apiResponse("issues/update", 400, error.message);
  }
};

export default update;
