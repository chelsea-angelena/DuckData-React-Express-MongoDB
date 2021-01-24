const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
	const logger = require('morgan');
	app.use(logger('combined'));
	app.use(express.static(path.join(__dirname, 'client/public')));
} else {
	app.use(express.static(path.join(__dirname, 'client/build')));

}

require('./routes/duckRoute')(app);
require('./config/db')();

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`listening on ${port}`);
});
