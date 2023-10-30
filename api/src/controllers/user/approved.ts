import user from '../../models/user'

const approve = async (req: any, res: any) => {
  res.send(await user.approve(req.params.id))
}

export default approve;