const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AgendamentoSchema = new Schema({
    usuario_id: {
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        required: true,
    },
    aula_id: {
        type: Schema.Types.ObjectId,
        ref: "aulas",
        required: true,
    },
    data: {
        type: Date,
        required: true,
    }
});

const AgendamentoModel = mongoose.model("agendamentos", AgendamentoSchema);

module.exports = AgendamentoModel;
