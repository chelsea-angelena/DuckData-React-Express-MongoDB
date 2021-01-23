import  { useState } from 'react';
import axios from 'axios';

export default function useForm() {
	const [data, setData] = useState({});
	// const [error, setError] = useState(null);

	const handleChange = (e) => {
		e.persist();
		console.log(e.target.value);
		setData((data) => ({
			...data,
			[e.target.name]: e.target.value,
		}));
	};

	const submitForm = async (data) => {
		console.log(data);
		try {
			let res = await axios.post('/duckRoute', {
				data: data,
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

	return { handleSubmit, handleChange, data };
}
