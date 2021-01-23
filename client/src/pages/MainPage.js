import React from 'react';
import { Layout } from '../components';

let info = {
	title: 'Duck Data App',
	description:
		'This app collects user inputted data to track the location, time, quantities and types of food being fed to ducks. This information is being used for research purpose, and the data submitted is anonymous. We will automatically pin point your location, so please ensure your location services are on, and that you have enabled permission. Additionally, you can manually enter the place-name.',
	units:
		'Please do your best to estimate the number of ducks fed, and the ammount and quantity of food using the units of measurement provided',
	descriptionTwo:
		'Please do not feed anything harmful to the sucks. See the feeding guide to find out what foods are safe and which ones to avoid.',
	outro: 'We appreciate your participation in this research project.',
	outroTwo: 'Thanks for using Duck Data!',
};

export default function MainPage() {
	const { title, description, units, descriptionTwo, outro, outroTwo } = info;

	return (
		<Layout>
			<h1 className='intro__title'>{title}</h1>
			<div className='intro__info'>
				<p className='intro__item'>{description}</p>
				<p className='intro__item'>{units}</p>
				<p className='intro__item'>{descriptionTwo}</p>
				<p className='intro__item'>{outro}</p>
				<p className='intro__item'>{outroTwo}</p>
			</div>
		</Layout>
	);
}
