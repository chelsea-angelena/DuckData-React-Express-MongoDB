import React from 'react';
import { duckInfo, Layout } from '../components';

export default function InfoPage() {
	const {
		infoTitle,
		infoTwo: { itemOne, itemTwo, itemThree, itemFour },
		badFood: {
			badItemOne,
			badItemTwo,
			badItemThree,
			badItemFour,
			badItemFive,
			badItemSix,
			badItemEight,
		},
	} = duckInfo;
	return (
		<Layout>
			<h3 className='info__title'>{infoTitle}</h3>
			<div className='info__divider'></div>
			<h6 className='info__subtitle'>Good Food For Ducks:</h6>

			<ul className='info__list'>
				<li className='info__item'>{itemOne}</li>
				<li className='info__item'>{itemTwo}</li>
				<li className='info__item'>{itemThree}</li>
				<li className='info__item'>{itemFour}</li>
			</ul>
			<div className='info__divider'></div>
			<h6 className='info__subtitle'>Prohibited Foods:</h6>

			<ul className='info__list'>
				<li className='info__item'>{badItemOne}</li>
				<li className='info__item'>{badItemTwo}</li>
				<li className='info__item'>{badItemThree}</li>
				<li className='info__item'>{badItemFour}</li>
				<li className='info__item'>{badItemFive}</li>
				<li className='info__item'>{badItemSix}</li>
				<li className='info__item'>{badItemEight}</li>
			</ul>
		</Layout>
	);
}
