import Issue from "../../../schemas/issue";
import apiResponse from "../../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const add = async (id: string, payload: any) => {
  try {
    const sanitizeId = sanitize(id);
    const issue = await Issue.findOne({ _id: sanitizeId })

    if (!issue) return apiResponse('issue/note/add', 404, "Issue not found");

    const sanitizePayload = sanitize(payload);
    
    // issue.notes.push(sanitizePayload);
    await Issue.updateOne(
      { _id: sanitizeId },
      { $push: { notes: sanitizePayload } }
    );

    return apiResponse('issue/note/add', 200, payload);
  } catch (error: any) {
    return apiResponse('issue/note/add', 500, error.message);
  }
}

export default add;