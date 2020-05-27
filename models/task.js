const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	Title: String,
	Description: String,
	Status: String
});

module.exports = mongoose.model('Task', TaskSchema);
