
const DuckData = require('../models/duckData');
const { validationResult } = require('express-validator');

module.exports = (app) => {
	app.get('/duckRoute', (req, res) => {
		res.status(200).res.json({ message: 'ducks' });
	});

	app.post(
		'/duckRoute',
		[
			// check('food', 'Food is required').not().isEmpty(),
			// check('locationName', 'location name is required').not().isEmpty(),
			// check('qtyFoodNumber', 'The ammount of food is required').not().isEmpty(),
			// check('qtyFoodMeasurement', 'unit of measurement is required')
			// 	.not()
			// 	.isEmpty(),
			// check('numOfDucks', 'the number of ducks is required').not().isEmpty(),
		],
		async (req, res) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				console.log(errors);
				return res.status(400).json({ errors: errors.array() });
			} else {
				try {
					const {
						body: {
							coords: { lat, long },
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
							latitude: lat,
							longitude: long,
						},
					});
					const submitMessage = 'Thank You for your submission!';
					await data.save();
					res.json(data, submitMessage);
				} catch (e) {
					console.log(e);
				}
				status(500).json({ message: e.message });
			}
		}
	);

	app.put('/duckRoute', (req, res, next) => {
		res.status(200).res.json({ message: 'post has been updated' });
	});
	app.delete('/duckRoute', (req, res) => {
		res.status(200).res.json({ message: 'deleted' });
	});
};
