import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import { decodedToken as decodedTokenType } from "../../@types/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const setPassword = async (payload: any) => {
  try {
    const { token: token, setPasswordData: setPasswordData } = payload;

    const decodedToken: any = jwt.decode(token) as decodedTokenType;
    if (!decodedToken)
      return apiResponse("auth/setPassword", 401, "Unauthorized");

    const user: any = await User.find({
      email: decodedToken.email,
      token: token,
    })
      .select("-password")
      .then((u: any) => u[0]);
    if (!user) return apiResponse("auth/verifyCode", 400, "User not found");

    const hashPassword = bcrypt.hashSync(setPasswordData.password, 10);

    await User.findOneAndUpdate(
      { _id: user._id },
      { password: hashPassword, token: null }
    );
    return apiResponse("auth/setPassword", 200, user);
  } catch (error: any) {
    return apiResponse("auth/setPassword", 400, error.message);
  }
};

export default setPassword;
