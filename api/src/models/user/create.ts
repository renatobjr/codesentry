import { create as createType } from "../../@types/user";
import apiResponse from "../../utils/apiResponse";
import token from "../../utils/token";
import mail from "../../utils/mail";
import User from "../../schemas/user";

const create = async (payload: createType) => {
  const user = await User.create(payload);

  if (user) {
    const sixDigitCode = Math.floor(100000 + Math.random() * 900000).toString();
    const generatedToken = token.generate({
      action: "register",
      email: user.email,
      code: sixDigitCode,
    });

    await User.updateOne({ _id: user._id }, { generatedToken });

    const to = payload.email;
    const from = process.env.SENDGRID_USER ?? "";
    const subject = "Welcome to CodeSentry";
    const link = `${process.env.SENDGRID_URL}/register/`;
    const code = sixDigitCode;

    // @FIX: verify mustache template to atteched a img
    const html = await mail.template({
      name: "register_invite",
      data: {
        user: payload.name,
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
  }

  return apiResponse("users/create", 200, user);
};

export default create;
