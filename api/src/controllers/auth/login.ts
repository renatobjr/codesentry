import auth from '../../models/auth';

const login = async (req: any, res: any) => {
  res.send(await auth.login(req.body))
}

export default login;