export type create = {
  name: string;
  email: string;
  role: string;
};

export type get = {
  _id: string;
  name: string;
  email: string;
  role: string;
  projects: string[];
  issues: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
}

// export default {create, get};
