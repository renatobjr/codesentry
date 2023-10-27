import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const auth = {
  isValidPassword: (password: string, hash: string): boolean => {
    console.log(password, hash)
    return bcryptjs.compareSync(password, hash);
  }
}

export default auth;