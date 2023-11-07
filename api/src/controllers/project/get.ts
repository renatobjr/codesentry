import project from "../../models/project";

const get = async (req: any, res: any) => {
  res.send(await project.get(req.params.id));
}

export default get;