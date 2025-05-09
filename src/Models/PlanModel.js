import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
});

const PlanModel = mongoose.model("plans", PlanSchema);

export default PlanModel;
