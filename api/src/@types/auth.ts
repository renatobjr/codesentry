export type login = {
  email: string;
  password: string;
}

export type tokenData = {
  _id: number;
  iat: Date;
  exp: Date;
}

export type verify = {
  email: string;
}

export type verifyCode = {
  pinCode: string;
  token: string;
}

export type decodedToken = {
  action: string;
  email: string;
  code: string;
}