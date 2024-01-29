import apiResponse from "../../../utils/apiResponse";
import Issue from "../../../schemas/issue";
import sanitize from "mongo-sanitize";

const remove = async (id: string, payload: any) => {
  try {
    const issue = await Issue.findOne({ _id: sanitize(id) });

    if (!issue) return apiResponse('issue/files/remove', 404, 'Issue not found');
    
    await Issue.updateOne({
      _id: sanitize(id),
    },{
      $pull: {
        attachedFiles: {
          filename: sanitize(payload.filename)
        }
      }
    }).then((result: any) => {
      return apiResponse('issue/files/remove', 200, result);
    });
  } catch (error: any) {
    return apiResponse('issue/files/remove', 500, error.message) 
  }
}

export default remove;