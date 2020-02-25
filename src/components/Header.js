import React from 'react';
import Menu from '../assets/menu.svg';
import './header.scss';
const HeaderComponent = () => {
	return (
		<div className='header-component'>
			<div className='row dev-info'>
				<div className='brand  dev-info-item'>
					<p>
						<span className='initials'>L</span>uc
					</p>
				</div>
				<div className='dev-info-item'>
					<p>+250789277275</p>
				</div>
				<div className='separator'>/</div>
				<div className='dev-info-item'>
					<p>jean.abayo@gmail.com</p>
				</div>
			</div>
			<div className='menu'>
				<button className='menu-btn'>
					<img src={Menu} className='icon' alt='=' />
				</button>
			</div>
		</div>
	);
};

export default HeaderComponent;
