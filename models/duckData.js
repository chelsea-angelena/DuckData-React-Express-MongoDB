const mongoose = require('mongoose');

const DuckSchema = new mongoose.Schema({
	locationName: {
		type: 'String',
	},
	food: {
		type: 'String',
	},
	qtyFoodNumber: {
		type: 'Number',
	},
	qtyFoodMeasurement: {
		type: 'String',
	},
	numOfDucks: {
		type: 'Number',
	},
	time: {
		type: Date,
		default: Date.now,
	},
	qtyInG: {
		converted: {
			type: 'Number',
		},
		convertedUnit: {
			type: 'String',
		},
	},
	coords: {
		latitude: {
			type: 'String',
		},
		longitude: {
			type: 'String',
		},
	},
});
module.exports = DuckData = mongoose.model('ducks', DuckSchema);
