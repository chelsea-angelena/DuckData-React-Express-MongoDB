import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context as DataContext } from '../context/DataContext';
import { DuckList, Layout } from '../components';

export default function EditData() {
	const { state, deleteData } = useContext(DataContext);
	const { submitMessage } = state;
	if (!submitMessage) {
		return (
			<>
				<Link to='/form' style={{ color: 'ochre' }}>
					Click to return to the form
				</Link>
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
	let history = useHistory();
	return (
		<div className='edit'>
			<Layout>
				<div className='edit__message'>{submitMessage}</div>
				<DuckList item={data} />
				<p>Errors? Delete and resubmit your data.</p>
				<button
					onClick={() => {
						deleteData(_id);
						history.push('/form');
					}}
				>
					Delete Item
				</button>
			</Layout>
		</div>
	);
};
