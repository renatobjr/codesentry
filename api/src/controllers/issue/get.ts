import issue from "../../models/issue";

const get = async (req: any, res: any) => {
  res.send(await issue.get(req.params.id));
}

export default get;   