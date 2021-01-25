import React from 'react';
import { MainPage, DataPage, Form, InfoPage, EditData } from './pages';
import { Header, Layout, Footer } from './components';
import { Route } from 'react-router-dom';
import { Provider as DataProvider } from './context/DataContext';
import './styles/custom.scss';

export default function App() {
	return (
		<DataProvider>
			<Routes />
		</DataProvider>
	);
}

function Routes() {
	return (
		<>
			<Header />
			<Layout>
				<Route path='/edit' component={EditData} />
				<Route exact path='/info' component={InfoPage} />
				<Route exact path='/data' component={DataPage} />
				<Route path='/form' component={Form} />
				<Route exact path='/' component={MainPage} />
			</Layout>
			<Footer />
		</>
	);
}
