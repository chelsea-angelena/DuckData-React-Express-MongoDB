import React from 'react';

const Preview = ({ data }) => {
	const {
		numOfDucks,
		locationName,
		food,
		qtyFoodNumber,
		qtyFoodMeasurement,
	} = data;

	return (
		<div>
			<div>Please ensure this information is correct:</div>
			<div className='data'>
				<p className='data__item'>
					<span className='bold'>Food:</span>
					{food}
				</p>
				<p className='data__item'>
					<span className='bold'>Ducks Fed:</span>
					{numOfDucks}
				</p>

				<p className='data__item'>
					<span className='bold'>Location:</span>
					{locationName}
				</p>
				<p className='data__item'>
					<span className='bold'> Ammount of Food:</span>
					{qtyFoodNumber}-{qtyFoodMeasurement}
				</p>
			</div>
		</div>
	);
};
export default Preview;
