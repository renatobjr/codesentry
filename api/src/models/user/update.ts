import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import sanitize from "mongo-sanitize";

const update = async (id: string, payload: any) => {
  try {
    const sanitizedId = sanitize(id);
    const user = await User.findById(sanitizedId);

    if (!user) return apiResponse("users/update", 400, "User not found");
    
    await User.updateOne(
      { _id: user._id },
      payload.user
    )
    return apiResponse("users/update", 200, "User updated");
  } catch (error: any) {
    return apiResponse("users/update", 400, error.message);
  }
}

export default update;