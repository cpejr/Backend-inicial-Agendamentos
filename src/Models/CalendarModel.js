import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
  teacher_id: {
    type: Schema.Types.ObjectId,
    ref: "teachers",
    required: true,
  },
});

const CalendarModel = mongoose.model("calendars", CalendarSchema);

export default CalendarModel;
