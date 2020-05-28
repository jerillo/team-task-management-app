const express = require('express');
const router = express.Router();

router.get('/:task_id/new', (req, res) => {
	res.send('create new task');
});

router.post('/:task_id', (req, res) => {
	res.send('new task added');
});

router.get('/:task_id', (req, res) => {
	res.send('view task');
});

router.get('/:task_id/edit', (req, res) => {
	res.send('show form to edit task');
});

router.put('/:task_id', (req, res) => {
	res.send('updated task');
});

router.delete('/:task_id', (req, res) => {
	res.send('task deleted');
});

module.exports = router;
