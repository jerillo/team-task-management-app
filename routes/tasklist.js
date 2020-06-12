const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const TaskList = require('../models/tasklist');

router.get('/', middleware.isLoggedIn, (req, res) => {
	res.render('tasklist/index');
});

router.get('/new', middleware.isLoggedIn, (req, res) => {
	res.render('tasklist/new');
});

router.post('/', middleware.isLoggedIn, (req, res) => {
	const { title, description, admin } = req.body;
	const tasklist = new TaskList({
		title,
		description,
		admin
	});
	console.log(tasklist);
	res.json(tasklist);
});

router.get('/:id', (req, res) => {
	res.send('view tasklist');
});

router.get('/:id/edit', (req, res) => {
	res.send('show form to edit tasklist');
});

router.put('/:id', (req, res) => {
	res.send('updated tasklist');
});

router.delete('/:id', (req, res) => {
	res.send('tasklist deleted');
});

module.exports = router;
