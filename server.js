const express = require('express');
const cors = require('cors');
const app = express();
// const path = require('path');
const logger = require('morgan');

app.use(express.json());
app.use(logger('combined'));
app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/public')));

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });
// require('./routes/duckRoute')(app);
require('./config/db')();

app.get('/', (req, res) => {
  res.send("Hello from duck data")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`listening on ${port}`);
});
