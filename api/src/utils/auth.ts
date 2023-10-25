import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET ?? '5ane8fqubXB3NMeSTULFhgvfv4aBs2';

const auth = {
  generateToken: (data: any): string => {
    const token = jwt.sign(data, secret, { expiresIn: '12h' });
    return token;
  }
}

export default auth;