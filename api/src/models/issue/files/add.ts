import Issue from "../../../schemas/issue";
import apiResponse from "../../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const add = async (id: string, payload: any) => {
  console.log(id, payload)
  try {
    const sanitizeId = sanitize(id);
    const issue = await Issue.findOne({ _id: sanitizeId });
  
    if (!issue) return apiResponse("issue/files/add", 404, "Issue not found");
    console.log(...payload)
  
    const sanitizePayload = sanitize(payload);
    issue.attachedFiles.push(...sanitizePayload)

    await Issue.updateOne(
      { _id: sanitizeId },
      issue
    );

    return apiResponse('issue/files/add', 200, payload);
  } catch (error: any) {
    return apiResponse("issue/files/add", 400, error.message); 
  }
}

export default add;