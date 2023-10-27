import { get as getUser } from "../../@types/user";
import { verify as verifyType } from "../../@types/auth";
import apiResponse from "../../utils/apiResponse";
import mail from "../../utils/mail";
import token from "../../utils/token";
import User from "../../schemas/user";

const verify = async (payload: verifyType) => {
  try {
    let user: getUser = await User.find({
      email: payload.email,
      status: "active",
    }).then((u: any) => u[0]);

    if (user) {
      const sixDigitCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      const generatedToken = token.generate({
        action: "recovery",
        email: user.email,
        code: sixDigitCode,
      });

      await User.updateOne({ _id: user._id }, { token: generatedToken });

      const to = payload.email;
      const from = process.env.SENDGRID_USER ?? "";
      const subject = "Recovery Codesentry Password";
      const link = `${process.env.SENDGRID_URL}/verify/`;
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

      if (!email)
        return apiResponse("users/create", 400, "Error sending email");
    }
    return apiResponse("auth/verify", 200, user);
  } catch (error: any) {
    return apiResponse("auth/verify", 400, error.message);
  }
};

export default verify;