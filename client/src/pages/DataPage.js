import React from 'react';
import { Layout } from '../components';
import useDuckData from '../hooks/useDuckData';

export default function DataPage() {
	const [ducks, error, loading] = useDuckData();

	if (error) {
		return <div>{error.message}</div>;
	}
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<Layout>
			{ducks && ducks.map((item) => <OneDuck item={item} key={item._id} />)}
		</Layout>
	);
}

const OneDuck = ({ item }) => {
	const {
		coords: { latitude, longitude },
		qtyFoodNumber,
		qtyFoodMeasurement,
		qtyInG: { converted, convertedUnit },
		locationName,
		food,
		time,
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
		</div>
	);
};
