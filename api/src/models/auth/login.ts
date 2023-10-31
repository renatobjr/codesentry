import { login as loginType} from '../../@types/auth';
import { get as getUser }from "../../@types/user";
import apiResponse from '../../utils/apiResponse';
import auth from '../../utils/auth';
import token from '../../utils/token';
import User from '../../schemas/user';
import sanitize from 'mongo-sanitize';
import { status as userStatus } from '../../data/users';

const login = async (payload: loginType) => {
  try {
    const sanitizedPayload = sanitize(payload);
    let user: getUser | null = await User.findOne({
      email: sanitizedPayload.email,
      status: { $ne: userStatus.DISABLED },
    });

    if (!user) return apiResponse("auth/login", 400, "It's not possible to login with this user.");

    const isValidPassword = auth.isValidPassword(
      sanitizedPayload.password,
      user.password
    );

    if (!isValidPassword)
      return apiResponse("auth/login", 400, "Invalid credentials");

    const generatedToken = token.generate({
      _id: user._id,
    });

    if (user.firstLogin) {
      await User.updateOne({_id: user._id}, { firstLogin: false, status: userStatus.ACTIVE })
    }

    const lastLogin = new Date();
    await User.updateOne({_id: user._id}, { lastLogin })

    return apiResponse("auth/login", 200, {
      user: user,
      token: generatedToken,
    });  
  } catch (error: any) {
    return apiResponse("auth/login", 400, error.message);
  }
}

export default login;