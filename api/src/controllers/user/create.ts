import user from '../../models/user'

const create = async (req: any, res: any) => {
  res.send(await user.create(req.body))
}

export default create;