import { useState, useEffect } from 'react';

export default function useLocation() {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});
		if ('geolocation' in navigator) {
			console.log('navigation is available');
		} else {
			console.log('navigation not available');
		}
	}, []);

	return { latitude, longitude };
}
