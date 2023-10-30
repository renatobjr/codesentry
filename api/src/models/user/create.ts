import { create as createType } from "../../@types/user";
import apiResponse from "../../utils/apiResponse";
import token from "../../utils/token";
import mail from "../../utils/mail";
import User from "../../schemas/user";

const create = async (payload: createType) => {
  try {
    const data = await User.find({ email: payload.email });
    
    if (data.length != 0)
      return apiResponse("users/create", 400, "User already exists");

      console.log(payload)

    const user = await User.create(payload);

    if (user) {
      const sixDigitCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      const generatedToken = token.generate({
        action: "register",
        email: user.email,
        code: sixDigitCode,
      });

      await User.updateOne({ _id: user._id }, { token: generatedToken });

      const email = mail.send({
        to: user.email,
        subject: "Welcome to Codesentry",
        link: `${process.env.SENDGRID_URL}/register?token=${generatedToken}`,
        template: "register_invite",
        user: user.name,
        label: "Register",
        attachment: { code: sixDigitCode },
      });

      if (!email)
        return apiResponse("users/create", 400, "Error sending email");
    }
    return apiResponse("users/create", 200, user);
  } catch (error: any) {
    return apiResponse("users/create", 400, error.message);
  }
};

export default create;
