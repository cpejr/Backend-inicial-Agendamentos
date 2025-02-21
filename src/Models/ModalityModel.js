const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ModalitySchema = new Schema({
    name: {
        type: String,
        select: false,
    }
});

const ModalityModel = mongoose.model('modalities', ModalitySchema);

module.exports = ModalityModel;
