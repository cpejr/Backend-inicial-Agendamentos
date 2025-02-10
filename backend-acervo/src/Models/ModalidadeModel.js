const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;


const ModalidadeSchema = new Schema({
    nome : {
        type: String,
        select: false,
    }
});

const ModalidadeModel = mongoose.model('modalidades', ModalidadeSchema);

module.exports = ModalidadeModel;