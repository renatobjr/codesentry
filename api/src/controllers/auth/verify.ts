import auth from "../../models/auth";

const verify = async (req: any, res: any) => {
  res.send(await auth.verify(req.body));
}

export default verify;