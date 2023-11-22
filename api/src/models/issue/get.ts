import apiResponse from "../../utils/apiResponse";
import Issue from "../../schemas/issue";
import Project from "../../schemas/project";
import sanitize from "mongo-sanitize";
import User from "../../schemas/user";

const get = async (id: String) => {
  try {
    const sanitizedId = sanitize(id);
    const issue = await Issue.findOne({ _id: sanitizedId });

    if (!issue) return apiResponse("issue/get", 404, "Issue not found");

    issue.project = await Project.findOne({ _id: issue.project }).select(
      "name"
    );
    issue.reporter = await User.findOne({ _id: issue.reporter }).select("name");
    issue.assignedTo = await User.findOne({ _id: issue.assignedTo }).select("name");

    let notes = await Promise.all(
      issue.notes.map(async (note: any) => {
        note.postedBy = await User.findOne({ _id: note.postedBy }).select("name");
        return {
          content: note.content,
          postedBy: note.postedBy,
          postedAt: note.postedAt, 
        }
      })
    //   issue.notes.map( async (note: any) => {
    //   note.postedBy = await User.findOne({ _id: note.postedBy }).select("name");
    //   return {
    //     content: note.content,
    //     postedBy: note.postedBy,
    //     createdAt: note.createdAt,
    //   }
    // });
    ); 
    issue.notes = notes;
    console.log(notes)
    return apiResponse("issue/get", 200, issue);
  } catch (error: any) {
    return apiResponse("issue/get", 400, error.message);
  }
};

export default get;
