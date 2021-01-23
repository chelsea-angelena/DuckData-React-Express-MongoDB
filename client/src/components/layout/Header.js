import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<div className='nav'>
			<ul className='nav__list'>
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
