const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true, 
    },
    creditos: {
        type: Number,
        required: true, 
    }
});


const PlanoModel = mongoose.model('planos', PlanoSchema);

module.exports = PlanoModel;
