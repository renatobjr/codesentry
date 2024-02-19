type ProjectType = {
  _id: string;
  name: string;
  description?: string;
  admin?: string[];
  reporters: string[];
  assignees: string[];
  mainLanguage?: string;
  mainDatabase?: string;
  createdAt: string;
  updatedAt: string;
};
export default ProjectType;
