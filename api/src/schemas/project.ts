import { InferSchemaType, Schema, model, models } from "mongoose";

const schema = new Schema({
  name: {
    required: true,
    type: String
  },
  description: String,
  admin: {
    required: true,
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    default: String
  },
  reporters: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    default: []
  },
  assignees: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    default: []
  },
  mainLanguages: {
    required: true,
    type: String
  },
  database: {
    required: true,
    type: String
  },
  apiExternalToken: {
    required: false,
    type: String
  },
},{ timestamps: true });

export type ProjectType = InferSchemaType<typeof schema>;
export default models.Project || model("Project", schema);