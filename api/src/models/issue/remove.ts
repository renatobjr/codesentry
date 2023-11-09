import Issue from "../../schemas/issue";
import apiResponse from "../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const remove = async (id: string) => {
  try {
    const sanitizedId = sanitize(id);
    await Issue.deleteOne({ _id: sanitizedId });

    return apiResponse("issues/remove", 200, true);
  } catch (error:any) {
    return apiResponse("issues/remove", 400, error.message);
  }
}

export default remove;