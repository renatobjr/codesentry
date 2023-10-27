import auth from "../../models/auth";

const resendCode = async (req: any, res: any) => {
  res.send(await auth.resendCode(req.body))
}

export default resendCode;