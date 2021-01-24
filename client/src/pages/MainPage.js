import React from 'react';
import { Layout, mainPageInfo } from '../components';
import duckPic from '../assets/images/duckPic.jpg';
export default function MainPage() {
	const { infoOne, infoTwo, infoThree, infoFour, infoFive } = mainPageInfo;

	return (
		<>
			<Layout>
				<h3 className='info__title'>Welcome To Duck Data</h3>
				<p className='info__item'>{infoOne}</p>
				<p className='info__item'>{infoTwo}</p>
				<p className='info__item'>{infoThree}</p>
				<p className='info__item'>{infoFour}</p>
				<p className='info__item'>{infoFive}</p>

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
