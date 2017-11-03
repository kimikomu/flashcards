const express = require('express');
const router = express.Router();

// const data = require('../data/flashcardData.json').data;
// const cards = data.cards;
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// get random card number
router.get('/', (req, res) => {
	 const numberOfCards = cards.length;
	 const flashcardId = Math.floor(Math.random() * numberOfCards);
	 res.redirect(`/cards/${flashcardId}`);
});


// collect card info
router.get('/:id', (req, res) => {
	const { side } = req.query;
	const { id } = req.params;

	// go to question side if a side is not provided
	if(!side) {
		res.redirect(`/cards/${id}?side=question`);		
	}

	const text = cards[id][side];
	const { hint } = cards[id];
	const templateData = { id, text };

	// chose the side with the question or answer
	if(side === 'question') {
		templateData.hint = hint;
		templateData.sideToShow = 'answer';
		templateData.sideToShowDisplay = 'Answer';
	} else if(side === 'answer') {
		templateData.sideToShow = 'question';
		templateData.sideToShowDisplay = 'Question';
	}

	res.render('card', templateData);
});

module.exports = router;