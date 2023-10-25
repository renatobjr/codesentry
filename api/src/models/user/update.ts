import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";

const update = async (id: string, payload: any) => {
  try {
    const user = await User.findOneAndUpdate({ _id: id }, payload, { new: true });
    return apiResponse("users/update", 200, user);
  } catch (error: any) {
    return apiResponse("users/update", 400, error.message);
  }
}

export default update;