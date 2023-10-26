import user from '../../models/user';

const remove = async (req: any, res: any) => {
  res.send(await user.remove(req.params.id));
}

export default remove;