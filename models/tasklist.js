const mongoose = require('mongoose');

const TaskListSchema = new mongoose.Schema({
	title: String,
	description: String,
	createdAt: { type: Date, default: Date.now },
	tasks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Task'
		}
	],
	admin: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		username: String
	},
	collaborators: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			},
			username: String
		}
	]
});

module.exports = mongoose.model('TaskList', TaskListSchema);
