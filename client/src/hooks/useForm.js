import { useState } from 'react';
import axios from 'axios';
import useLocation from '../hooks/useLocation';
import { useHistory } from 'react-router-dom';

export default function useForm() {
	const [data, setData] = useState({});
	const { latitude, longitude, permission } = useLocation();
	const [error, setError] = useState(null);
	const [preview, setPreview] = useState(false);
	const [formVis, setFormVis] = useState(true);
	const history = useHistory();

	const handleGoBack = () => {
		history.goBack();
	};
	
	const togglePreview = (e) => {
		e.preventDefault();
		setPreview(!preview);
		setFormVis(!formVis);
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
		console.log(data);
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
		latitude,
		submitForm,
		longitude,
		error,
		formVis,
		togglePreview,
		preview,
		permission,
		handleGoBack,
	};
}
