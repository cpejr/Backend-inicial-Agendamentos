const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PagamentoSchema = new Schema({
    usuario_id: {
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        required: true,
    },
    metodo : {
        type: String,
    },
    valor : {
        type: Number,
        require: true,
    },
    data : {
        type: Date,
        default: Date.now,
        require: true,
    }

});

const PagamentoModel = mongoose.model('pagamentos', PagamentoSchema);

module.exports = PagamentoModel;