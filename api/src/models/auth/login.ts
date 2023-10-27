import { login as loginType} from '../../@types/auth';
import { get as getUser }from "../../@types/user";
import apiResponse from '../../utils/apiResponse';
import auth from '../../utils/auth';
import token from '../../utils/token';
import User from '../../schemas/user';

const login = async (payload: loginType) => {
  try {
    let user: getUser = await User.find({
      email: payload.email,
      status: "active",
    })
      .select("-token")
      .then((u: any) => u[0]);

    if (!user) return apiResponse("auth/login", 400, "Something went wrong");

    const isValidPassword = auth.isValidPassword(
      payload.password,
      user.password
    );

    if (!isValidPassword)
      return apiResponse("auth/login", 400, "Something went wrong");

    const generatedToken = token.generate({
      _id: user._id,
    });

    return apiResponse("auth/login", 200, {
      user: user,
      token: generatedToken,
    });  
  } catch (error: any) {
    return apiResponse("auth/login", 400, error.message);
  }
}

export default login;