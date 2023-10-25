import user from '../../models/user';

const get = async(req: any, res: any) => {
  res.send(await user.get(req.params.id));
}

export default get;