const DuckData = require('../models/duckData');

const duckData = require('../models/duckData');

module.exports = (app) => {
	app.post('/duckRoute', async (req, res) => {
		console.log(req.body.data);
		try {
			const {
				body: {
					data: {
						data: {
							locationName,
							food,
							qtyFoodNumber,
							qtyFoodMeasurement,
							numOfDucks,
						},
					},
					coords: { latitude, longitude },
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
			res.status(200).json({ submitMessage, data });
		} catch (e) {
			console.log(e);
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
	app.delete('/duckRoute', async (req, res) => {
		try {
			await DuckData.findByIdAndRemove(req.body._id);
			res
				.status(200)
				.json({ message: 'Data Deleted, please resubmit ith correct data' });
		} catch (e) {
			res.status(500).json('server error');
		}
	});
};
