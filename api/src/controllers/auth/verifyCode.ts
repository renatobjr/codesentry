import auth from "../../models/auth";

const verifyCode = async (req: any, res: any) => {
  res.send(await auth.verifyCode(req.body));
}

export default verifyCode;