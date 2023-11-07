import issue from "../../models/issue";

const list = async (req:any, res:any) => {
  res.send(await issue.list(req.query));
}

export default list;