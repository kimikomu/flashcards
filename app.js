const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	res.send('I love Treehouse!!');
});

app.listen(3000);