const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    time: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    teacher_id: {
        type: Schema.Types.ObjectId,
        ref: "teachers",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const ClassModel = mongoose.model('classes', ClassSchema);

module.exports = ClassModel;
