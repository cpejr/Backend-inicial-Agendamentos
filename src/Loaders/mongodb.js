const mongoose = require("mongoose");

async function startDB(){
await mongoose.connect('mongodb+srv://rcampellosoares243:sLKdVuISHIcWEGad@clusternode.ziuld.mongodb.net/')
}

module.exports = startDB;