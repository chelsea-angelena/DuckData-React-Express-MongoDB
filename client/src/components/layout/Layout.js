import React from 'react';

export default function Layout({ children }) {
	return (
		<div id='layout'>
			<div className='layout'>{children}</div>
		</div>
	);
}
