const { connect, connection } = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

module.exports = () => {
	const MONGO_DB_PASS = process.env.MONGO_DB_PASS;
	const MONGO_DB_USER = process.env.MONGO_DB_USER;
	const MONGO_DB_DATABASE = process.env.MONGO_DB_DATABASE;
	const MONGO_URI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASS}@cluster0.6i1s5.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

	connect(MONGO_URI, {
		pass: process.env.MONGO_DB_PASS,
		user: process.env.MONGO_DB_USER,
		dbName: process.env.MONGO_DB_DATABASE,

		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
		.then(() => {
			console.log('Connection on estabislished with MongoDB');
		})
		.catch((error) => console.error(error.message));
	connection.on('connected', () => {
		console.log('Mongoose connected to DB Cluster');
	});
	connection.on('error', (error) => {
		console.error(error.message);
	});

	connection.on('disconnected', () => {
		console.log('Mongoose Disconnected');
	});
};
