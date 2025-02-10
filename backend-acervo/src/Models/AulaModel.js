const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const AulaSchema = new Schema({
    nome : {
        type: String,
        unique: true,
    },

    duracao : {
        type: Number,
        request : true,
    },

    capacidade : {
        type : Number,
        request : true,
    },

    tipo : {
        type : Number,
        request : true,
        enum : [0, 1, 2],// exemplo 0 = yoga, 1 = karatê, 2 = catequese
    },

    professor_id: {
        type: Schema.Types.ObjectId,
        ref: "professores",
        required: true,
    },
    data: {
        type: Date,
        require: true,
    }
});


const AulaModel = mongoose.model('Aulas', AulaSchema);

module.exports = AulaModel;