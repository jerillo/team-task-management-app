const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');
const User = require('./models/user');

// Environment variables setup
require('dotenv').config();

// Requiring routes
const indexRoutes = require('./routes/index');
const tasklistRoutes = require('./routes/tasklist');
const taskRoutes = require('./routes/task');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Passport Configuration
app.use(
	require('express-session')({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use('/', indexRoutes);
app.use('/tasklists', tasklistRoutes);
app.use('/tasklists/:id/tasks', taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
