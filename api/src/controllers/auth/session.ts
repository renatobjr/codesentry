import auth from "../../models/auth";

const session = async (req: any, res: any) => {
  console.log("session", req.headers.authorization)
  res.send(await auth.session(req.headers.authorization));
}

export default session;