import React from 'react';
import useForm from '../../hooks/useForm';
import { Layout } from '../index.js';
import Preview from './Preview';

export default function Form() {
	const {
		handleChange,
		permission,
		latitude,
		longitude,
		data,
		handleGoBack,
		handleSubmit,
		formVis,
		togglePreview,
		preview,
	} = useForm();

	return (
		<Layout>
			<h3 className='data__title'>Data Form</h3>
			<div className='data__divider'></div>
			<div hidden={!formVis} className='form'>
				<form hidden={!formVis} onSubmit={togglePreview}>
					<label className='form__label'>
						Location:
						<input
							placeholder='name of location'
							onChange={handleChange}
							name='locationName'
							// value={data.locationName}
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
							// value={data.food}
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
							// value={data.qtyFoodNumber}
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
							// value={data.qtyFoodMeasurement}
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
							// value={data.numOfDucks}
							className='form__input'
							required
							type='number'
							id='numOfDucks'
							min='1'
							max='1000'
							step='1'
						/>
					</label>
					{permission && (
						<div>
							<p>
								<span className='form__label'>Latitude:</span> {latitude}
							</p>
							<p>
								<span className='form__label'>Longitude:</span> {longitude}
							</p>
						</div>
					)}
					<button className='form__button' onClick={togglePreview}>
						Submit
					</button>
				</form>

				<div>
					<div hidden={!preview}>
						<Preview data={data} />
						<button className='form__button' onClick={handleSubmit}>
							Submit
						</button>

						<button onClick={handleGoBack} className='form__button'>
							Go Back
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
