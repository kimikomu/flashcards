const express = require('express');
const router = express.Router();

// const data = require('../data/flashcardData.json').data;
// const cards = data.cards;
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// collect card info
router.get('/:id', (req, res) => {
	const { side } = req.query;
	const { id } = req.params;
	const text = cards[id][side];
	const { hint } = cards[id];

	const templateData = { text };

	// chose the side with the question or answer
	if (side === 'question') {
		templateData.hint = hint;
	}

	res.render('card', templateData);
});

module.exports = router;