import { useState, useContext } from 'react';
import { Context as DataContext } from '../context/DataContext';
import { useHistory } from 'react-router-dom';

import useLocation from './useLocation';

export default function useForm() {
	const [data, setData] = useState({});
	const { latitude, longitude } = useLocation();
	const { addData } = useContext(DataContext);

	const history = useHistory();

	const handleChange = (e) => {
		e.persist();
		setData((data) => ({
			...data,
			[e.target.name]: e.target.value,
		}));
	};

	let navigate = async () => {
		await history.push({ pathname: `/edit` });
	};

	const handleSubmit = (e) => {
		let coords = { latitude, longitude };
		if (e) {
			e.preventDefault();
			addData({ data, coords });
		} else {
			return;
		}
		navigate();
	};

	return {
		handleSubmit,
		handleChange,
		data,
		latitude,
		longitude,
	};
}
