import auth from "../../models/auth";

const session = async (req: any, res: any) => {
  res.send(await auth.session(req.body.token));
}

export default session;