import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ModalitySchema = new Schema({
  name: {
    type: String,
    select: false,
  },
});

const ModalityModel = mongoose.model("modalities", ModalitySchema);

export default ModalityModel;
