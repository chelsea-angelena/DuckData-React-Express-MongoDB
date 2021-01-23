const DuckData = require('../models/duckData');
const { validationResult } = require('express-validator');
const duckData = require('../models/duckData');

// check('food', 'Food is required').not().isEmpty(),
// check('locationName', 'location name is required').not().isEmpty(),
// check('qtyFoodNumber', 'The ammount of food is required').not().isEmpty(),
// check('qtyFoodMeasurement', 'unit of measurement is required')
// 	.not()
// 	.isEmpty(),
// check('numOfDucks', 'the number of ducks is required').not().isEmpty(),

module.exports = (app) => {
	app.post('/duckRoute', [], async (req, res) => {
		// const errors = validationResult(req);
		// if (!errors.isEmpty()) {
		// 	console.log(errors);
		// 	return res.status(400).json({ errors: errors.array() });
		// } else {
		console.log(req.body.coords);
		try {
			const {
				body: {
					coords: { latitude, longitude },
					data: {
						data: {
							locationName,
							food,
							qtyFoodNumber,
							qtyFoodMeasurement,
							numOfDucks,
						},
					},
				},
			} = req;
			let converted;
			let convertedNumber = (qty, measurement) => {
				if (measurement === 'mg') {
					converted = qty / 1000;
				}
				if (measurement === 'g') {
					converted = qty * 1;
				}

				if (measurement === 'kg') {
					converted = qty * 1000;
				}

				if (measurement === 'oz') {
					converted = qty * 28.34952;
				}

				if (measurement === 'lbs') {
					let oz = qty * 16;
					converted = oz * 28.34952;
				}
				return converted;
			};
			convertedNumber(qtyFoodNumber, qtyFoodMeasurement);

			let data = new DuckData({
				locationName: locationName,
				food: food,
				qtyFoodNumber: qtyFoodNumber,
				qtyFoodMeasurement: qtyFoodMeasurement,
				numOfDucks: numOfDucks,
				qtyInG: {
					converted: converted.toString(),
					convertedUnit: 'g',
				},
				coords: {
					latitude: latitude,
					longitude: longitude,
				},
			});
			const submitMessage = 'Thank You for your submission!';
			await data.save();
			res.json(submitMessage);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'server error' });
		}
	});
	app.get('/duckRoute', async (req, res, next) => {
		await duckData.find({}, function (err, result) {
			if (err) {
				status(500).json('serevr error');
			} else {
				res.json({ result });
			}
		});
	});
	// app.put('/duckRoute', (req, res, next) => {
	// 	res.status(200).res.json({ message: 'post has been updated' });
	// });
	// app.delete('/duckRoute', (req, res) => {
	// 	res.status(200).res.json({ message: 'deleted' });
	// });
};
