import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	// <LocationProvider value={location}>
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	// </LocationProvider>,
	document.getElementById('root')
);
