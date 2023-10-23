import { InferSchemaType, Schema, model, models } from "mongoose";

enum Role {
  admin = 'admin',
  reporter = 'reporter',
  developer = 'developer',
}

const schema = new Schema({
  name: {
    required: true,
    type: String
  },
  avatar: String,
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  role: {
    required: true,
    type: Role,
    enum: Object.values(Role),
  },
  projects: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Project"
    }],
    default: []
  
  }
},{ timestamps: true });

export type UserType = InferSchemaType<typeof schema>;
export default models.User || model("User", schema);