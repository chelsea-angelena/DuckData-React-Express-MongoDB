import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FormResponse = ({ response }) => {
	const {
		data: {
			submitMessage,
			// coords: { latitude, longitude },
			data: {
				qtyFoodNumber,
				qtyFoodMeasurement,
				qtyInG: { converted, convertedUnit },
				locationName,
				food,
				_id,
				numOfDucks,
			},
		},
	} = response;
	const goToDataPage = () => {};
	const deleteEntry = async () => {
		console.log(_id);
		try {
			await axios.delete('/duckRoute', {
				data: {
					_id: { _id },
				},
			});
			window.location.reload();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='response'>
			<p className='response__subtitle'>{submitMessage}</p>
			<p className='response__par'>
				Please Verify the information below. If anything is in correct you can
				delete it now and re-submit
			</p>
<div>
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
				<span className='bold'> Ammount of Food:</span>
				{qtyFoodNumber}-{qtyFoodMeasurement}
			</p>
			<p className='data__item'>
				<span className='bold'>
					Ammount of Food
					<br /> (converted to grams):
				</span>
				{converted}-{convertedUnit}
			</p>
			<Link to='/data'>
				<button className='form__button' onClick={goToDataPage}>
					Confirm
				</button>
			</Link>
			<button className='form__button' onClick={deleteEntry}>
				Delete
			</button>
		</div>
    </div>
	);
};
export default FormResponse;



