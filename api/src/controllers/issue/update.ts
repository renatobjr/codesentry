import issue from "../../models/issue";

const update = async (req: any, res: any) => {
  res.send(await issue.update(req.params.id, req.body));
}

export default update;