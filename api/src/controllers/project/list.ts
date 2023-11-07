import project from "../../models/project";

const list = async (req:any, res:any) => {
  res.send(await project.list());
}

export default list;