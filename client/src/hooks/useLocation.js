import { useState, useEffect } from 'react';

export default function useLocation() {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [permission, setPermission] = useState(false);
	

	useEffect(() => {
		let answer = window.confirm('Location Permission enabled');
		if (answer) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			});
		} else {
			setLatitude(0);
			setLongitude(0);
		}
		if ('geolocation' in navigator) {
			setPermission(true);
		}
	}, []);

	return { latitude, longitude, permission };
}
