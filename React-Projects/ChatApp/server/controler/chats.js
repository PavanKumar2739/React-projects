const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    username : String,
    message : String,
    avatar : String,
    timeStamp:{type:Date, default:Date.now}

});

const Chat = mongoose.model('allmessage',chatSchema);

module.exports = Chat;