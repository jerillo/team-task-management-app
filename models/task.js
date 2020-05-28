const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	Title: String,
	Description: String,
	Status: String,
	Tasklist: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'TaskList'
		},
		listname: String
	}
});

module.exports = mongoose.model('Task', TaskSchema);
