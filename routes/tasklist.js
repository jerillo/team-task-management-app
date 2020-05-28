const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('tasklist/index');
});

router.get('/new', (req, res) => {
	res.send('create new tasklist');
});

router.post('/', (req, res) => {
	res.send('new tasklist added');
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
