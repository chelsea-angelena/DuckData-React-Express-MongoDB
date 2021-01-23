import React from 'react';
import { Layout } from '../components';
import useDuckData from '../hooks/useDuckData';
import { DuckList } from '../components';

export default function DataPage() {
	const [ducks, loading] = useDuckData();

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<Layout>
			<h3 className='data__title'>Duck Data</h3>
			{ducks && ducks.map((item) => <DuckList item={item} key={item._id} />)}
		</Layout>
	);
}
