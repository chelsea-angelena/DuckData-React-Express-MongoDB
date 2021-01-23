import React from 'react';
import { Layout, info } from '../components';
import duckPic from '../assets/images/duckPic.jpg';
export default function MainPage() {
	const {
		title,
		description,
		units,
		descriptionTwo,
		outro,
		infothree,
		outroTwo,
	} = info;

	return (
		<>
			<Layout>
				<h1 className='intro__title'>{title}</h1>
				<div className='intro__info'>
					<p className='intro__item'>{description}</p>
					<p className='intro__item'>{infothree}</p>
					<p className='intro__item'>{units}</p>
					<p className='intro__item'>{descriptionTwo}</p>
					<p className='intro__item'>{outro}</p>
					<p className='intro__item'>{outroTwo}</p>
				</div>
			</Layout>
			<div>
				<img
					src={duckPic}
					alt='duck'
					style={{ width: '100%', margin: 0, padding: 0 }}
				/>
			</div>
		</>
	);
}
