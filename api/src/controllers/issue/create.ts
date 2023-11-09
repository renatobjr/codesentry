import issue from "../../models/issue";

const create = async (req: any, res: any) => {
  res.send(await issue.create(req.body, req.user))
}

export default create;