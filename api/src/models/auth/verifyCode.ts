import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";import token from "../../utils/token";
import { decodedToken as decodedTokenType } from "../../@types/auth";
import jwt from "jsonwebtoken";
import sanitize from "mongo-sanitize";

const verifyCode = async (payload: any) => {
  try {
    const sanitazedPayload = sanitize(payload);
    const { pinCode: pinCode, token: token, origin: origin } = sanitazedPayload;
    
    const decodedToken: any = jwt.decode(
      token
    ) as decodedTokenType;

    // Some verifications
    if (!decodedToken) return apiResponse("auth/verifyCode", 401, "Invalid token");
    if (decodedToken.action != origin) return apiResponse("auth/verifyCode", 401, "Unauthorized");
    if (decodedToken.code != pinCode) return apiResponse("auth/verifyCode", 401, "Invalid code");
    
    const user:any = await User.findOne({
      email: decodedToken.email,
      token: token,
    })
    if (!user)
      return apiResponse("auth/verifyCode", 400, "User not found");
    
    return apiResponse("auth/verifyCode", 200, { user: user, token: token });
  } catch (error: any) {
    return apiResponse("auth/verifyCode", 400, error.message);
  }
}

export default verifyCode;