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

    await User.updateOne(
      { _id: id },
      { status: userStatus.APPROVED }
    );

    mail.send({
      to: user.email,
      subject: "Codesentry account approved",
      link: `${process.env.SENDGRID_URL}/`,
      template: "register_approved",
      user: user.name,
      label: "Login",
    });
    return apiResponse("users/approve", 200, "User approved");
  } catch (error: any) {
    return apiResponse("users/approve", 400, error.message);
  }
};

export default approve;
