/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { DuckList } from '../components';
import { Context as DataContext } from '../context/DataContext';
import axios from 'axios';

export default function DataPage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const apiCall = async () => {
			let res = await axios.get('/duckRoute');
			console.log(res);
			setData(res.data.result);
		};
		apiCall();
	}, []);

	return (
		<>
			<h3 className='data__title'>Duck Data</h3>
			<div className='data'>{data && <DataList data={data} />}</div>
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
