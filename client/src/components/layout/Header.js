import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div id='header'>
			<div className='header'>
				<Link to='/'>Home</Link>
				<Link to='/data'>Data</Link>
				<Link to='/form'>Form/Link</Link>
			</div>
		</div>
	);
}
