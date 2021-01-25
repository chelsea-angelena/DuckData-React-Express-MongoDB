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
				<div> Thank you for your submission!</div>
				<Link to='/data'> Click to see Data </Link>
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
			<Link to='/data'>
				<button onClick={() => {}}>Go To Data Page</button>
			</Link>
			<Link to='/data'>
				<button onClick={() => deleteData(_id)}>Delete Item</button>
			</Link>
		</div>
	);
};
