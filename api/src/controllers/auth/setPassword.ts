import auth from "../../models/auth";

const setPassword = async (req: any, res: any) => {
  res.send(await auth.setPassword(req.body));
}

export default setPassword;