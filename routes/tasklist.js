const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('tasklist/index');
});

module.exports = router;
