import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CheckinSchema = new Schema({
  scheduling_id: {
    type: Schema.Types.ObjectId,
    ref: "schedulings",
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now,
  },
  no_show: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const CheckinModel = mongoose.model("checkins", CheckinSchema);

export default CheckinModel;
