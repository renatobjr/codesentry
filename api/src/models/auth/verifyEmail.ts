import { get as getUser } from "../../@types/user";
import { verify as verifyType } from "../../@types/auth";
import apiResponse from "../../utils/apiResponse";
import mail from "../../utils/mail";
import token from "../../utils/token";
import User from "../../schemas/user";
import sanitize from "mongo-sanitize";
import { status as userStatus } from "../../data/users"; 

const verifyEmail = async (payload: verifyType) => {
  try {
    const sanitizedEmail = sanitize(payload.email);

    let user: getUser | null = await User.findOne({
      email: sanitizedEmail,
      status: userStatus.ACTIVE,
    });

    if (!user) {
      return apiResponse("auth/verify", 400, "User not found");
    }

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
      template: "recovery",
      user: user.name,
      label: "Recovery Password",
      attachment: { code: sixDigitCode },
    });

    if (!email) return apiResponse("users/create", 400, "Error sending email");

    return apiResponse("auth/verify", 200, { user: user, token: generatedToken });
  } catch (error: any) {
    return apiResponse("auth/verify", 400, error.message);
  }
};

export default verifyEmail;
