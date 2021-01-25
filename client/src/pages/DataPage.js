import React, { useEffect, useContext } from 'react';

import { DuckList } from '../components';
import { Context as DataContext } from '../context/DataContext';

export default function DataPage() {
	const { state, getData } = useContext(DataContext);

	useEffect(() => {
		getData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h3 className='data__title'>Duck Data</h3>
			<div className='data'>
				{state &&
					state.map((item, i) => (
						<div className='data__component' key={item._id}>
							<DuckList item={item} />
						</div>
					))}
			</div>
		</>
	);
}
