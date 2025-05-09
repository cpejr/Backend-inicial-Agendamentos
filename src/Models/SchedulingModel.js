import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SchedulingSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  class_id: {
    type: Schema.Types.ObjectId,
    ref: "classes",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const SchedulingModel = mongoose.model("schedulings", SchedulingSchema);

export default SchedulingModel;
