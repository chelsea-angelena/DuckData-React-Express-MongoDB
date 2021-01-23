import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useDuckData() {
	const [ducks, setDucks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios.get('/duckRoute');
				setDucks(res.data.result);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return [ducks, error, loading];
}
