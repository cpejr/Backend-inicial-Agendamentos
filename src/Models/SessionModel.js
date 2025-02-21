const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        unique: true,
    },
},
{
    timestamps: true
})

const SessionModel = mongoose.model('sessions', SessionSchema);

module.exports = SessionModel;
