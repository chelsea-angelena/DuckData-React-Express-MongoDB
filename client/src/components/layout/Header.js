import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
	const [menu, setMenu] = useState('nav__list hidden');

	const showMenu = () => {
		setMenu('nav__list');
	};
	console.log(menu);
	return (
		<div className='nav'>
			<button onClick={showMenu}>Click</button>
			<ul className={menu}>
				<li className='nav__item'>
					<Link to='/' className='nav__link'>
						Home
					</Link>
				</li>
				<li className='nav__item'>
					<Link to='/form' className='nav__link'>
						Form
					</Link>
				</li>
				<li className='nav__item'>
					<Link to='/data' className='nav__link'>
						Data
					</Link>
				</li>
			</ul>
		</div>
	);
}
