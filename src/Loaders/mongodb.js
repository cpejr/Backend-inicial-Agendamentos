const mongoose = require("mongoose");

async function startDB(){

    await mongoose.connect('mongodb+srv://rafaelsoares:Wf7y5kk3D5WaoPuo@cluster0.dttm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    console.log("Initialized database");
}

module.exports = startDB;