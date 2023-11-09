import { InferSchemaType, Schema, model, models } from "mongoose";

const priotrity = ["low", "medium", "high", "urgent", "immediate"] as const;

const reproducibility = [
  "always",
  "occasionally",
  "rarely",
  "unable",
  "N/A",
] as const;

const state = [
  "unsigned",
  "open",
  "assigned",
  "inProgress",
  "waitingFeedback",
  "solved",
  "closed",
  "rejected",
  "duplicate",
] as const;

type Priority = (typeof priotrity)[number];
type Reproducibility = (typeof reproducibility)[number];
type State = (typeof state)[number];

interface Issue extends Document {
  resume: string;
  description: string;
  stepsToReproduce: string;
  priority: Priority;
  reproducibility: Reproducibility;
  state: State;
  reporter: string;
  assignedTo: string[];
  relatedTo: string[];
  attechedFiles: string[];
  notes: string[];
}

const schema = new Schema(
  {
    resume: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    project: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    stepsToReproduce: {
      required: false,
      type: String,
    },
    priority: {
      required: true,
      type: String,
      enum: priotrity,
      default: "medium",
    },
    reproducibility: {
      required: true,
      type: String,
      enum: reproducibility,
      default: "always",
    },
    state: {
      required: true,
      type: String,
      enum: state,
      default: "unsigned",
    },
    reporter: {
      required: false,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    assignedTo: {
      required: false,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    relatedTo: {
      required: false,
      type: String,
    },
    attachedFiles: {
      type: Object,
      default: [],
    },
    notes: {
      type: Object,
      default: [],
    },
  },
  { timestamps: true }
);

export type IssueType = InferSchemaType<typeof schema>;
const Issue = models.Issue || model("Issue", schema);

export default Issue;
