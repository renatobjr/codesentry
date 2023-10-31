import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import { decodedToken as decodedTokenType } from "../../@types/auth";
import jwt from "jsonwebtoken";
import mail from "../../utils/mail";
import token from "../../utils/token";
import { get as getUser } from "../../@types/user";

const resendCode = async (payload: any) => {
  try {
    const sanitizedPayload = payload;
    const { token: oldToken } = sanitizedPayload;
    const decodedToken: any = jwt.decode(oldToken) as decodedTokenType;

    if (!decodedToken)
      return apiResponse("auth/verifyCode", 401, "Unauthorized");

    const user: getUser | null  = await User.findOne({
      email: decodedToken.email,
      token: oldToken,
    });

    if (!user) return apiResponse("auth/resend-code", 400, "User not found");

    const sixDigitCode = Math.floor(100000 + Math.random() * 900000).toString();
    const generatedToken = token.generate({
      action: "recovery",
      email: user.email,
      code: sixDigitCode,
    });

    await User.updateOne({ _id: user._id }, { token: generatedToken });

    const email = mail.send({
      to: user.email,
      subject: "Recovery your Codesentry account",
      link: `${process.env.SENDGRID_URL}/verify`,
      template: "resend",
      user: user.name,
      label: "Recovery Password",
      attachment: { code: sixDigitCode },
    });

    if (!email) return apiResponse("users/create", 400, "Error sending email");

    return apiResponse("auth/resend-code", 200, { user: user, token: generatedToken });
  } catch (error: any) {
    return apiResponse("auth/resend-code", 400, error.message);
  }
};

export default resendCode;
