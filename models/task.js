const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: String,
	createdAt: { type: Date, default: Date.now },
	tasklist: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'TaskList'
		},
		listname: String
	}
});

module.exports = mongoose.model('Task', TaskSchema);
