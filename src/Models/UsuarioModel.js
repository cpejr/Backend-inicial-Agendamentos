const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false 
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: Number, // 0 = Cliente, 1 = Profissional, 2 = Administrador
        required: true,
        enum: [0, 1, 2]
    }
});

UsuarioSchema.pre("save", async function (next) {
    if (this.isModified("senha")) {
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
    }
    next();
});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;
