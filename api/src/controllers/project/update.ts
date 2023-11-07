import project from "../../models/project";

const update = async (req:any, res:any) => {
  res.send(await project.update(req.params.id, req.body))
}

export default update;

