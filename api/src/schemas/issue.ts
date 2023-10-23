import { InferSchemaType, Schema, model, models } from "mongoose";

enum priotrity {
  low = 'low',
  medium = 'medium',
  high = 'high',
  urgent = 'urgent',
  immediate = 'immediate',
}

enum reproducibility {
  always = 'always',
  sometimes = 'sometimes',
  once = 'once',
  unable = 'unable',
  nottried = 'nottried',
  random = 'random',
}

enum state {
  unsigned = 'unsigned',
  open = 'open',
  assigned = 'assigned',
  inProgress = 'in-progress',
  waitingFeedback = 'waiting-feedback',
  solved = 'solved',
  closed = 'closed',
  rejected = 'rejected',
  duplicate = 'duplicate',
}

const schema = new Schema({
  resume: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  stepsToReproduce: {
    required: true,
    type: String
  },
  priority: {
    required: true,
    type: priotrity,
    enum: Object.values(priotrity),
  },
  reproducibility: {
    required: true,
    type: reproducibility,
    enum: Object.values(reproducibility),
  },
  state: {
    required: true,
    type: state,
    enum: Object.values(state),
    default: state.unsigned
  },
  assignedTo: {
    required: true,
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    default: String
  },
  relatedTo: {
    required: false,
    type: Object,
    default: []
  },
  attechedFiles: {
     type: Object,
     default: []
  },
  notes: {
    type: Object,
    default: []
  }
}, { timestamps: true });

export type IssueType = InferSchemaType<typeof schema>;
export default models.Issue || model("Issue", schema);