import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import mail from "../../utils/mail";
import token from "../../utils/token";
import sanitize from "mongo-sanitize";
import { status as userStatus } from "../../data/users";

const approve = async (id: string) => {
  try {
    const sanitizedId = sanitize(id);
    const user = await User.findById(sanitizedId);

    if (!user) return apiResponse("users/approve", 400, "User not found");

    const sixDigitCode = Math.floor(100000 + Math.random() * 900000).toString();
    const generatedToken = token.generate({
      action: "register",
      email: user.email,
      code: sixDigitCode,
    });

    await User.updateOne(
      { _id: user._id },
      { status: userStatus.APPROVED, token: generatedToken }
    );

    mail.send({
      to: user.email,
      subject: "Codesentry account approved",
      link: `${process.env.SENDGRID_URL}/register?token=${generatedToken}`,
      template: "register_approved",
      user: user.name,
      label: "Login",
      attachment: { code: sixDigitCode },
    });
    
    return apiResponse("users/approve", 200, "User approved");
  } catch (error: any) {
    return apiResponse("users/approve", 400, error.message);
  }
};

export default approve;
