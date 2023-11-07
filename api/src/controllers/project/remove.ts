import project from "../../models/project";

const remove = async (req: any, res: any) => {
  res.send(await project.remove(req.params.id));
}

export default remove;