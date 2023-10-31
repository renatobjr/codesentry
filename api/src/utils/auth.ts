import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const auth = {
  isValidPassword: (password: string, hash: string): boolean => {
    return bcryptjs.compareSync(password, hash);
  }
}

export default auth;