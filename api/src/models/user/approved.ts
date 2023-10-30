import User from "../../schemas/user";
import apiResponse from "../../utils/apiResponse";
import mail from "../../utils/mail";
import token from "../../utils/token";

const approve = async (id: string) => {
  try {
    const user = await User.findById(id);

    if (!user) return apiResponse("users/approve", 400, "User not found");

    const sixDigitCode = Math.floor(100000 + Math.random() * 900000).toString();
    const generatedToken = token.generate({
      action: "approve",
      email: user.email,
      code: sixDigitCode,
    });

    await User.updateOne(
      { _id: id },
      { status: "approved", token: generatedToken }
    );

    mail.send({
      to: user.email,
      subject: "Codesentry account approved",
      link: `${process.env.SENDGRID_URL}/register?token=${generatedToken}`,
      template: "register_approved",
      user: user.name,
      label: "Set your password",
      attachment: { code: sixDigitCode },
    });
    return apiResponse("users/approve", 200, "User approved");
  } catch (error: any) {
    return apiResponse("users/approve", 400, error.message);
  }
};

export default approve;
