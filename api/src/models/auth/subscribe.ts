import sanitize from "mongo-sanitize"
import apiResponse from "../../utils/apiResponse"
import { get as getUser } from "../../@types/user"
import { subscribe as subscribeType } from "../../@types/auth"
import mail from "../../utils/mail"
import User from "../../schemas/user"
import { status as userStatus } from "../../data/users"

const subscribe = async (payload: subscribeType) => {
  try {
    const sanitizedPayload = sanitize(payload)
    const { fullName: fullName, subscribeEmail: subscribeEmail } = sanitizedPayload

    let user: getUser | null = await User.findOne({
      email: subscribeEmail,
    });

    if (user != null) return apiResponse("auth/subscribe", 400, "This email is already subscribed.");

    const newUser = new User({
      name: fullName,
      email: subscribeEmail,
      status: userStatus.WAITING_APPROVAL
    });

    newUser.save();

    if (!newUser) return apiResponse("auth/subscribe", 400, "It's not possible to subscribe with this user.");

    const email = mail.send({
      to: newUser.email,
      subject: "Subscribe to Codesentry",
      link: `${process.env.SENDGRID_URL}`,
      template: "subscribe",
      user: newUser.name,
      label: "Your subscribe",
    });

    if (!email) return apiResponse("auth/subscribe", 400, "Error sending email");

    return apiResponse("auth/subscribe", 200, newUser);
    
  } catch (error: any) {
    return apiResponse("auth/subscribe", 400, error.message);
  }
}

export default subscribe;