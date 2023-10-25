import user from '../../models/user'

const update = async (req: any, res: any) => {
  res.send( await user.update(req.params.id, req.body))
}

export default update;