import { useState } from 'react';
import axios from 'axios';
import useLocation from '../hooks/useLocation';

export default function useForm() {
	const [data, setData] = useState({});
	const [checked, setChecked] = useState(false);
	const { latitude, longitude } = useLocation();
	const [error, setError] = useState(null);

	const toggleChecked = (e) => {
		setChecked(!checked);
	};

	const handleChange = (e) => {
		e.persist();

		setData((data) => ({
			...data,
			[e.target.name]: e.target.value,
		}));
	};
	const handleReset = () => {
		Array.from(document.querySelectorAll('input')).forEach(
			(input) => (input.value = '')
		);
		setData({
			itemvalues: [{}],
		});
	};

	const submitForm = async (data) => {
		try {
			await axios.post('/duckRoute', {
				data,
				coords: { latitude, longitude },
			});
		} catch (e) {
			setError(e);
		} finally {
			handleReset();
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
		error,
	};
}
