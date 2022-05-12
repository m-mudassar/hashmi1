import mongoose  from "mongoose";
// const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.models.users || mongoose.model('users', userSchema);
