import jwt from "jsonwebtoken"
import { tokenData } from "../@types/auth";
import { decodedToken as decodedTokenType } from "../@types/auth";

const secret = process.env.JWT_SECRET ?? '5ane8fqubXB3NMeSTULFhgvfv4aBs2';

const token = {
  generate: (data: any): string => {
    const token = jwt.sign(data, secret, { expiresIn: '12h' });
    return token;
  },
  verify: (token: string): tokenData | boolean => {
    if (token != undefined) {
      const bearer = token.split(' ')[1];
      return jwt.verify(bearer, secret) as unknown as tokenData;
    }
    return false;
  }
}

export default token;