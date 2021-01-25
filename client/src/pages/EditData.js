import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as DataContext } from '../context/DataContext';
import { DuckList } from '../components';

export default function EditData() {
	const { state, deleteData } = useContext(DataContext);
	const { submitMessage } = state;
	if (!submitMessage) {
		return (
			<>
				<Link to='/form'> Click to return to the form </Link>
			</>
		);
	}
	return (
		<>
			<h3 className='data__title'>Review Data</h3>
			<div className='data'>
				<Item deleteData={deleteData} dataItem={state} />
			</div>
		</>
	);
}

const Item = ({ dataItem, deleteData }) => {
	let { submitMessage, data } = dataItem;
	let { _id } = data;
	return (
		<div className='edit'>
			<div className='edit__message'>{submitMessage}</div>
			<DuckList item={data} />
			<p>Errors? Delete and resubmit your data.</p>
			<button
				onClick={() => {
					deleteData(_id);
					window.location.reload();
				}}
			>
				Delete Item
			</button>
		</div>
	);
};
