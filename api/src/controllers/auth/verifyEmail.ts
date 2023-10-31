import auth from "../../models/auth";

const verifyEmail = async (req: any, res: any) => {
  res.send(await auth.verifyEmail(req.body));
}

export default verifyEmail;