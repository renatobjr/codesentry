import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import { decodedToken as decodedTokenType } from "../../@types/auth";
import jwt from "jsonwebtoken";
import mail from "../../utils/mail";
import token from "../../utils/token";

const resendCode = async (payload: any) => {
  const { token: oldToken } = payload;

  try {
    const decodedToken: any = jwt.decode(oldToken) as decodedTokenType;

    if (!decodedToken)
      return apiResponse("auth/verifyCode", 401, "Unauthorized");

    const user: any = await User.find({
      email: decodedToken.email,
      token: oldToken,
    })
      .select("-password")
      .then((u: any) => u[0]);

    if (!user) return apiResponse("auth/resend-code", 400, "User not found");

    const sixDigitCode = Math.floor(100000 + Math.random() * 900000).toString();
    const generatedToken = token.generate({
      action: "register",
      email: user.email,
      code: sixDigitCode,
    });

    await User.updateOne({ _id: user._id }, { token: generatedToken });

    const to = user.email;
    const from = process.env.SENDGRID_USER ?? "";
    const subject = "Welcome to CodeSentry";
    const link = `${process.env.SENDGRID_URL}/register?token=${generatedToken}`;
    const code = sixDigitCode;

    // @FIX: verify mustache template to atteched a img
    const html = await mail.template({
      name: "register_invite",
      data: {
        user: user.name,
        link: link,
        label: "Register",
        code: code,
        img: `${process.env.SENDGRID_URL}/svg/logo_email.svg`,
      },
    });

    const email = await mail.send({
      to,
      from,
      subject,
      html,
    });

    if (!email) return apiResponse("users/create", 400, "Error sending email");

    return apiResponse("auth/resend-code", 200, user);
  } catch (error: any) {
    return apiResponse("auth/resend-code", 400, error.message);
  }
};

export default resendCode;
