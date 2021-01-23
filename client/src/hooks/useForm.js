import { useState } from 'react';
import axios from 'axios';
import useLocation from '../hooks/useLocation';

export default function useForm() {
	const [data, setData] = useState({});
	// const [error, setError] = useState(null);
	const [checked, setChecked] = useState(false);
	const { latitude, longitude } = useLocation();
	const [coords, setCoords] = useState({});

	const toggleChecked = (e) => {
		setChecked(!checked);
	};

	const handleChange = (e) => {
		e.persist();

		console.log(e.target.value);
		setData((data) => ({
			...data,
			[e.target.name]: e.target.value,
		}));
	};

	const submitForm = async (data, coords) => {
		console.log(coords);
		try {
			let res = await axios.post('/duckRoute', {
				data,
				coords: { latitude, longitude },
			});
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			submitForm({ data });
		} else {
			return;
		}
	};

	return {
		handleSubmit,
		handleChange,
		data,
		checked,
		toggleChecked,
		latitude,
		longitude,
	};
}
