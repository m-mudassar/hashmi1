const mongoose = require('mongoose');

const uri = "mongodb+srv://codebiters:malik786@cluster0.lpv4k.mongodb.net/hashmi-medical-store?retryWrites=true&w=majority";

async function connectdb() {
    try {
        await mongoose.connect(uri);
        await console.log("Mongodb connection ready")
    } catch (error) {
        console.log("Error connecting mongodb");
    }
}

async function disconnectdb() {
    try{
        await mongoose.connection.close();
        await console.log("Mongodb connection closed")
    } catch (error) {
        console.log("Error disconnecting mongodb");
    }
}

module.exports = {
     connectdb,
     disconnectdb,
 }
