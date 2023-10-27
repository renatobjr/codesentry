import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";import token from "../../utils/token";
import { decodedToken as decodedTokenType } from "../../@types/auth";
import jwt from "jsonwebtoken";

const verifyCode = async (payload: any) => {
  const { pinCode: pinCode, token: token, origin: origin } = payload;

  try {
    const decodedToken: any = jwt.decode(
      token
    ) as decodedTokenType;

    // Some verifications
    if (!decodedToken) return apiResponse("auth/verifyCode", 401, "Unauthorized");
    if (decodedToken.action != origin) return apiResponse("auth/verifyCode", 401, "Unauthorized");
    if (decodedToken.code != pinCode) return apiResponse("auth/verifyCode", 401, "Unauthorized");
    
    const user:any = await User.find({
      email: decodedToken.email,
      token: token,
    })
      .select("-password")
      .then((u: any) => u[0]);
    if (!user)
      return apiResponse("auth/verifyCode", 400, "User not found");
    
    return apiResponse("auth/verifyCode", 200, { user: user, token: token });
  } catch (error: any) {
    return apiResponse("auth/verifyCode", 400, error.message);
  }
}

export default verifyCode;