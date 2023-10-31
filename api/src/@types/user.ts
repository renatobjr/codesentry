export type create = {
  name: string;
  email: string;
  role: string;
};

export type get = {
  _id: string;
  password: string;
  name: string;
  email: string;
  role: string;
  projects: string[];
  issues: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  firstLogin: boolean;
}