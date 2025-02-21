const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
    name: {
        type: String,
        select: false,
    },
    position: String,
    status: String
})

TeacherSchema.pre("save", async function(next) {
    const user = this

    if(user.isModified("password")) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;

        console.log({ salt, hash });
    }
    
    next()
})

const TeacherModel = mongoose.model('teachers', TeacherSchema);

module.exports = TeacherModel;
