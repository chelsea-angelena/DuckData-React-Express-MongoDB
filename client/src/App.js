import React from 'react';
import { MainPage, DataPage, FormPage } from './pages';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import './styles/custom.scss';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/data' component={DataPage} />
				<Route exact path='/form' component={FormPage} />
				<Route exact path='/'>
					<MainPage />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
