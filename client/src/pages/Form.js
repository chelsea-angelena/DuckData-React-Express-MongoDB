import React from 'react';
import { useForm, useLocation } from '../hooks';

export default function Form() {
	const { handleChange, handleSubmit } = useForm();
	const { latitude, longitude } = useLocation();

	return (
		<>
			<h3 className='data__title'>Data Form</h3>
			<div className='data__divider'></div>
			<form onSubmit={handleSubmit}>
				<label>
					Location:
					<input
						placeholder='name of location'
						onChange={handleChange}
						name='locationName'
						required
						type='text'
					/>
				</label> 
				<label>
					Type of Food:
					<select
						onChange={handleChange}
						name='food'
						placeholder='Choose Type'
						required
						type='text'
					>
						<option>Choose Type</option>
						<option name='crackedCorn'>Cracked Corn</option>
						<option name='frozenVeg'>Frozen peas or corn</option>
						<option name='veggies'>
							Veggies: chopped lettuce, green beans, other veggies
						</option>
						<option name='grains'>
							Grains: barley, oats, cooked rice, wheat, millet, birdseed or
							other grains
						</option>
						<option name='fruit'>Fruit</option>
						<option name='grapes'>Grapes</option>
						<option name='egg-shells'>Egg Shells</option>
						<option name='duck-food'>Duck Pellets</option>
					</select>
				</label>
				<label>
					Ammount of Food:
					<input
						placeholder='Enter a number amount'
						onChange={handleChange}
						name='qtyFoodNumber'
						required
						type='Number'
						min='.01'
						step='.01'
					/>
				</label>
				<label>
					Unit of Measurement
					<select
						onChange={handleChange}
						name='qtyFoodMeasurement'
						required
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
				<label>
					Number of Ducks Fed:
					<input
						placeholder='How many ducks?'
						onChange={handleChange}
						name='numOfDucks'
						required
						type='number'
						min='1'
						max='1000'
						step='1'
					/>
				</label>
				<label>
					Latitude:
					{latitude && (
						<input readOnly={true} defaultValue={latitude} name='latitude' />
					)}
				</label>
				<label>
					Latitude:
					{longitude && (
						<input readOnly={true} defaultValue={longitude} name='longitude' />
					)}
				</label>

				<button type='submit'>Submit</button>
			</form>
		</>
	);
}
