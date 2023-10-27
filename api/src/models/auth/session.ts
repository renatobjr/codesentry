import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import token from "../../utils/token";

const session = async (tokenString: string): Promise<Object> => {
  try {
    console.log("tokenString", tokenString);
    const response: any = token.verify(tokenString);
    if (!response) return apiResponse("auth/session", 401, "Unauthorized");

    const user = await User.findById(response._id).select("-password -token");
    console.log("user", user);
    return apiResponse("auth/session", 200, { user:user, token: tokenString });  
  } catch (error: any) {
    return apiResponse("users/create", 400, error.message);
  }
}

export default session;
