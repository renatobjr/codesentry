import issue from "../../models/issue";

const remove = async (req:any, res: any) => {
  res.send(await issue.remove(req.params.id));
}

export default remove;