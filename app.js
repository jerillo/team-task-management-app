const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Environment variables setup
require('dotenv').config();

// Requiring routes
const indexRoutes = require('./routes/index');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
