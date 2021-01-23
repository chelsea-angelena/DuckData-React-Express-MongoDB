import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import useLocation from '../../hooks/useLocation';

export default function Form() {
	const {
		handleSubmit,
		handleChange,
		data,
		checked,
		latitude,
		longitude,
		toggleChecked,
	} = useForm();

	// const [checked, setChecked] = useState(false);
	// console.log(latitude, longitude);
	// const toggleChecked = (e) => {
	// 	setChecked(!checked);
	// };

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<label className='form__label'>
					Location:
					<input
						placeholder='name of location'
						onChange={handleChange}
						name='locationName'
						value={data.locationName}
						className='form__input'
						required
						type='text'
						id='locationName'
					/>
				</label>
				<label className='form__label'>
					Type of Food:
					<select
						onChange={handleChange}
						name='food'
						value={data.food}
						className='form__input'
						placeholder='Choose Type'
						required
						type='text'
						id='food'
					>
						<option>Choose Type</option>
						<option name='grains'>Grains</option>
						<option name='veggies'>Veggies</option>
						<option name='fruit'>Fruit</option>
						<option name='grapes'>Grapes</option>
						<option name='duck-food'>Duck Pellets</option>
						<option name='legumes'>Legumes</option>
						<option name='bread'>Bread</option>
					</select>
				</label>
				<label className='form__label'>
					Ammount of Food:
					<input
						placeholder='Enter a number amount'
						onChange={handleChange}
						name='qtyFoodNumber'
						value={data.qtyFoodNumber}
						className='form__input'
						required
						type='Number'
						min='.01'
						step='.01'
						id='qtyFoodNumber'
					/>
				</label>
				<label className='form__label'>
					Unit of Measurement
					<select
						onChange={handleChange}
						name='qtyFoodMeasurement'
						value={data.qtyFoodMeasurement}
						className='form__input'
						required
						type='text'
						id='qtyFoodMeasurement'
						placeholder='Select Unit'
					>
						<option>Choose Unit</option>
						<option name='mg'>mg</option>
						<option name='g'>g</option>
						<option name='kg'>kg</option>
						<option name='oz'>oz</option>
						<option name='lbs'>lbs</option>
					</select>
				</label>
				<label className='form__label'>
					Number of Ducks Fed:
					<input
						placeholder='How many ducks?'
						onChange={handleChange}
						name='numOfDucks'
						value={data.numOfDucks}
						className='form__input'
						required
						type='number'
						id='numOfDucks'
						min='1'
						max='1000'
						step='1'
					/>
				</label>
				<input type='checkbox' onClick={toggleChecked} />
				<label hidden={!checked}>
					<input
						hidden={!checked}
						name='latitude'
						onChange={handleChange}
						readonly='true'
						placeholder={latitude}
						value={latitude}
						defaultValue={data.latitude}
					/>
					Latitude:
					{latitude}
				</label>

				<label hidden={!checked}>
					Longitude: {longitude}
					<input
						hidden={!checked}
						name='longitude'
						onChange={handleChange}
						readonly='true'
						placeholder={longitude}
						value={data.longitude}
						defaultValue={data.longitude}
					/>
					Longitude: {longitude}
				</label>
				<button className='form__button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}
