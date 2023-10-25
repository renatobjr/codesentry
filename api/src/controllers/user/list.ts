import user from '../../models/user';

const list = async (req: any, res: any) => {
  res.send(await user.list());
}

export default list;
