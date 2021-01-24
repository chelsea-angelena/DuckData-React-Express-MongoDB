import { useState } from 'react';
import axios from 'axios';

export default function useForm() {
	const [data, setData] = useState({});
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [error, setError] = useState(null);
	const [response, setResponse] = useState(null);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			});
		} else {
			return;
		}
	};

	const handleChange = (e) => {
		e.persist();
		setData((data) => ({
			...data,
			[e.target.name]: e.target.value,
		}));
	};

	const submitForm = async (data) => {
		try {
			let res = await axios.post('http://localhost:5000/duckRoute', {
				data,
				coords: { latitude, longitude },
			});
			setResponse(res);
		} catch (err) {
			setError(err);
		}
	};

	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			submitForm({ data });
			e.target.reset();
		} else {
			return;
		}
	};

	return {
		handleSubmit,
		handleChange,
		data,
		submitForm,
		latitude,
		longitude,
		getLocation,
		error,
		response,
	};
}
