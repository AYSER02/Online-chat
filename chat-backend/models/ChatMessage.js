// models/ChatMessage.js

const mongoose = require('mongoose');

const uri = 'mongodb://Ayser:Ayser@chat.bblep.mongodb.net/?retryWrites=true&w=majority'

const chatMessageSchema = new mongoose.Schema({
	user: { type: String, required: true },
	message: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;
