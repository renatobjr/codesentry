import { login as loginType} from '../../@types/auth';
import { get as getUser }from "../../@types/user";
import apiResponse from '../../utils/apiResponse';
import auth from '../../utils/auth';
import token from '../../utils/token';
import User from '../../schemas/user';
import sanitize from 'mongo-sanitize';

const login = async (payload: loginType) => {
  try {
    const sanitize_payload = sanitize(payload);
    let user: getUser | null = await User.findOne({
      email: sanitize_payload.email,
      status: "active",
    })

    if (!user) return apiResponse("auth/login", 400, "Something went wrong");

    const isValidPassword = auth.isValidPassword(
      sanitize_payload.password,
      user.password
    );

    if (!isValidPassword)
      return apiResponse("auth/login", 400, "Something went wrong");

    const generatedToken = token.generate({
      _id: user._id,
    });

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