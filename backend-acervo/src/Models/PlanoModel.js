const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;


const ProfessorShema = new Schema({
    nome : {
        type: String,
        select: false,
    },
    preco : {
        type: Number,
        require: true,
    },
    creditos : {
        type: Number,
        require: true,
    }
})

ProfessorShema.pre("save", async function(next) {
    const user = this

    if(user.isModified("senha")) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.senha, salt);

        user.senha = hash;

        console.log({ salt, hash });

    }
    
    next()
})

const ProfessorModel = mongoose.model('usuarios', ProfessorModel);

module.exports = ProfessorModel;