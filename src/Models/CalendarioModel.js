const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const CalendarioSchema = new Schema({
    professor_id: {
        type: Schema.Types.ObjectId,
        ref: "professores",
        required: true,
    }
});

const CalendarioModel = mongoose.model('calendarios', CalendarioSchema);

module.exports = CalendarioModel;