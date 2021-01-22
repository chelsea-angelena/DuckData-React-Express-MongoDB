modules.exports = (app) => {
	app.get('/duckRoute', (req, res) => {
		res.status(200).res.json({ message: 'ducks' });
	});
	app.post('/duckRoute', async (req, res, next) => {
		res.status(200).json({ message: 'Post successful' });
	});

	app.put('/duckRoute', (req, res, next) => {
		res.status(200).res.json({ message: 'post has been updated' });
	});
	app.delete('/duckRoute', (req, res) => {
		res.status(200).res.json({ message: 'deleted' });
	});
};
