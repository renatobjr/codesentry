import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";

const remove = async(id: string) => {
 try {
  await User.findByIdAndUpdate({ _id: id }, { status: 'disabled' }, { new: true });
  return apiResponse("users/remove", 200, true);
 } catch (error: any) {
  return apiResponse("users/remove", 400, error.message);
 }
}

export default remove;