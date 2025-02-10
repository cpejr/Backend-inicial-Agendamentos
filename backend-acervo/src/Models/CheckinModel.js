const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CheckinSchema = new Schema({
    agendamento_id: {
        type: Schema.Types.ObjectId,
        ref: "agendamentos",
        required: true,
    },
    horario: {
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

module.exports = CheckinModel;
