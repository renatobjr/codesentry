import issue from "../../../models/issue";

const remove = async (req: any, res: any) => {
  res.send( await issue.files.remove(req.params.id, req.body));
};

export default remove;
