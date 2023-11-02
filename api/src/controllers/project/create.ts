import projects from "../../models/project";

const create = async (req:any, res: any) => {
  res.send(await projects.create(req.body));
}

export default create;