/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { DuckList } from '../components';
import { Context as DataContext } from '../context/DataContext';

export default function DataPage() {
	const { state, getData } = useContext(DataContext);

	useEffect(() => {
		getData();
		const listener = window.addEventListener('focus', (event) => {
			getData();
		});
		return () => {
			window.removeEventListener('focus', listener);
		};
	}, []);

	return (
		<>
			<h3 className='data__title'>Duck Data</h3>
			<div className='data'>{state && <DataList data={state} />}</div>
		</>
	);
}

const DataList = ({ data }) => {
	return (
		<div>
			{data ? (
				data.map((item, i) => (
					<div className='data__component' key={item._id}>
						<DuckList item={item} />
					</div>
				))
			) : (
				<>
					<p>No Data?</p>
					<button> Click To Refresh </button>
				</>
			)}
		</div>
	);
};
