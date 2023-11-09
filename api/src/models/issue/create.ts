import Issue from "../../schemas/issue";
import apiResponse from "../../utils/apiResponse";
import { create as createType } from "../../@types/issue";
import sanitize from "mongo-sanitize";

const create = async (payload: any, currentUser: any) => {
  try {
    const sanitizedPayload = sanitize(payload);

    if (sanitizedPayload.assignedTo.length === 0) sanitizedPayload.assignedTo = undefined;
    sanitizedPayload.reporter = currentUser._id;
    
    const issue = await Issue.create(sanitizedPayload);
    return apiResponse('issue/create', 200, issue);
  } catch (error: any) {
    return apiResponse('issue/create', 400, error)
  }
}

export default create;