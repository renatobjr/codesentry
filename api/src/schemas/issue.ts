import { InferSchemaType, Schema, model, models } from "mongoose";

const priotrity  = [
'low',
'medium',
'high',
'urgent',
'immediate',
] as const;

const reproducibility = [
  'always',
  'sometimes',
  'once',
  'unable',
  'nottried',
  'random',
] as const;

const state = [
  'unsigned',
  'open',
  'assigned',
  'inProgress',
  'waitingFeedback',
  'solved',
  'closed',
  'rejected',
  'duplicate',
] as const;

type Priority = typeof priotrity[number];
type Reproducibility = typeof reproducibility[number];
type State = typeof state[number];

interface Issue extends Document {
  resume: string;
  description: string;
  stepsToReproduce: string;
  priority: Priority;
  reproducibility: Reproducibility;
  state: State;
  assignedTo: string[];
  relatedTo: string[];
  attechedFiles: string[];
  notes: string[];
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
    type: String,
    enum: priotrity,
    default: 'medium'
  },
  reproducibility: {
    required: true,
    type: String,
    enum: reproducibility,
    default: 'always'
  },
  state: {
    required: true,
    type: String,
    enum: state,
    default: 'unsigned'
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
const Issue =  models.Issue || model("Issue", schema);

export default Issue;