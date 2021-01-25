import React, { useEffect, useContext } from 'react';

import { DuckList } from '../components';
import { Context as DataContext } from '../context/DataContext';

export default function DataPage() {
	const { state, getData } = useContext(DataContext);

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { data } = state;
	console.log(data);
	if (!state || state.length < 1) {
		return (
			<>
				<div>Loading Data...</div>
				No data? Try clicking refresh here:
				<button onClick={() => window.location.reload()}>Refresh Data</button>
			</>
		);
	}
	return (
		<>
			<h3 className='data__title'>Duck Data</h3>
			<div className='data'>{data ? <DataList data={data} /> : null}</div>
		</>
	);
}

const DataList = ({ data }) => {
	console.log(data);
	return (
		<div>
			{data &&
				data.map((item, i) => (
					<div className='data__component' key={item._id}>
						<DuckList item={item} />
					</div>
				))}
		</div>
	);
};
