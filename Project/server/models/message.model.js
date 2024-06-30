const mongoose = require("mongoose");
const MessageSchema = require('../schemas/message.schema');

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;