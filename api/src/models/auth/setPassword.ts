import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import { decodedToken as decodedTokenType } from "../../@types/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sanitize from "mongo-sanitize";
import { status as userStatus} from "../../data/users";

const setPassword = async (payload: any) => {
  try {
    const sanitazedPayload = sanitize(payload);
    const { token: token, setPasswordData: setPasswordData } = sanitazedPayload;

    const decodedToken: any = jwt.decode(token) as decodedTokenType;
    if (!decodedToken)
      return apiResponse("auth/setPassword", 401, "Unauthorized");

    const user: any = await User.findOne({
      email: decodedToken.email,
      token: token,
    });

    if (!user) return apiResponse("auth/verifyCode", 400, "It's not possible to set a new password for this user.");

    const hashPassword = bcrypt.hashSync(setPasswordData.password, 10);

    await User.findOneAndUpdate(
      { _id: user._id },
      {
        password: hashPassword,
        token: null,
        status: userStatus.WAITING_APPROVAL,
      }
    );
    return apiResponse("auth/setPassword", 200, user);
  } catch (error: any) {
    return apiResponse("auth/setPassword", 400, error.message);
  }
};

export default setPassword;
