import React from 'react';

export default function DuckList({ item }) {
	const {
		coords: { latitude, longitude },
		qtyFoodNumber,
		qtyFoodMeasurement,
		qtyInG: { converted, convertedUnit },
		locationName,
		food,
		time,
		numOfDucks,
	} = item;
	return (
		<div className='data'>
			<p className='data__item'>
				<span className='bold'>Food:</span>
				{food}
			</p>

			<p className='data__item'>
				<span className='bold'>Location:</span>
				{locationName}
			</p>
			<p className='data__item'>
				<span className='bold'>Ducks Fed:</span>
				{numOfDucks}
			</p>

			<p className='data__item'>
				<span className='bold'>Time: </span>
				{time}
			</p>
			<p className='bold'>Coords:</p>
			<p className='data__item'>
				<span className='bold'>Latitude:</span>
				{latitude}
			</p>
			<p className='data__item'>
				<span className='bold'>Longitude: </span>
				{longitude}
			</p>

			<p className='data__item'>
				<span className='bold'> Ammount of Food:</span>
				{qtyFoodNumber}-{qtyFoodMeasurement}
			</p>
			<p className='data__item'>
				<span className='bold'>Ammount of Food (converted to grams): </span>
				{converted}-{convertedUnit}
			</p>
			<div className='data__divider'></div>
		</div>
	);
}
