const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const AulaSchema = new Schema({
    nome : {
        type: String,
        unique: true,
    },

    horario : {
        type: String,
        required : true,
    },
    duracao : {
        type: Number,
        required : true,
    },

    capacidade : {
        type : Number,
        required : true,
    },

    professor_id: {
        type: Schema.Types.ObjectId,
        ref: "professores",
        required: true,
    },
    data: {
        type: Date,
        required: true,
    }
});


const AulaModel = mongoose.model('aulas', AulaSchema);

module.exports = AulaModel;