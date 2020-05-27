const mongoose = require('mongoose');

const TaskListSchema = new mongoose.Schema({
	tasks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Task'
		}
	]
});

module.exports = mongoose.model('TaskList', TaskListSchema);
