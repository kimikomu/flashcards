const express = require('express');
const router = express.Router();

// root
router.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	}
});

// student sign in form
router.get('/hello', (req, res) => {	
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

// save the student name
router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

// remove the student name
router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

module.exports = router;