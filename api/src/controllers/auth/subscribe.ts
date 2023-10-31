import auth from "../../models/auth";

const subscribe =async (req: any, res: any) => {
  res.send(await auth.subscribe(req.body))
}

export default subscribe;