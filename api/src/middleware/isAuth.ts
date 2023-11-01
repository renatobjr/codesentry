import jwt from 'jsonwebtoken';
import User from '../schemas/user';
import apiResponse from '../utils/apiResponse';
import token from '../utils/token';


const isAuth = async (req: any, res: any, next: any) => {
  try {
    const tokenReceived = req.headers.authorization;
    const tokenData: any = token.verify(tokenReceived);
    const user = await User.findOne({ _id: tokenData._id });

    if (!user) return apiResponse("auth/isAuth", 400, "Invalid token");

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

export default isAuth;
