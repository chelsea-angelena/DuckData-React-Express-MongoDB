import React from 'react';
import useDuckData from '../hooks/useDuckData';
import { DuckList } from '../components';

export default function DataPage() {
	const [ducks, loading] = useDuckData();
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className='data'>
			<h3 className='data__title'>Duck Data</h3>
			{ducks &&
				ducks.map((item, i) => (
					<div className='data__component' key={item._id}>
						<DuckList item={item} />
					</div>
				))}
		</div>
	);
}
