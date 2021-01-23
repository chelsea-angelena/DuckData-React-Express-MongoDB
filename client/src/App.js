import React from 'react';
import { Main, DataPage, Form } from './pages';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import './styles/custom.scss';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/data' component={DataPage} />
				<Route exact path='/form' component={Form} />
				<Route exact path='/'>
					<Main />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
