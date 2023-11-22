import issue from "../../../models/issue"; 

const add = async (req: any, res: any) => {
  res.send( await issue.notes.add(req.params.id, req.body));
}

export default add;