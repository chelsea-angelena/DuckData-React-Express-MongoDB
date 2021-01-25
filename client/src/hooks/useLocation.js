import { useState, useEffect } from 'react';

export default function useLocation() {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);

	const getLocation = async () => {
		if (navigator.geolocation) {
			await navigator.geolocation.getCurrentPosition(function (position) {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			});
		} else {
			return;
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return { latitude, longitude, getLocation };
}
