// Desc: NavBar component for the application
import React, {useState} from 'react';
import styles from './NavBar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

type NavBarProps = {
	getChildData: (hidden: boolean) => void;
};
export default function NavBar({getChildData}: NavBarProps) {
	const [hidden, setHidden] = useState(false);

	//when this event is triggered return the new state to the app component to change the display of the mobile menu
	// and toggle the hero section
	// const handleTouchStart = (event: React.MouseEvent) => {
	// 	console.log('touch start', event);
	// 	setHidden(true);
	// };

	const handleCLick = (event: React.MouseEvent) => {
		console.log('click', hidden);
		setHidden(!hidden);
		getChildData(hidden);
	};

	return (
		<header>
			<nav
				className={`flex justify-between items-center py-5 px-8 md:py-10 md:px-33 font-bold ${styles.navBarColor} ${styles.textColor}`}>
				<div className='flex items-center'>
					<a href='/'>
						<img src='/src/images/logo.svg' alt='Shortly' height='300' />
					</a>
					<ul className={`lg:flex items-center shrink-1 hidden`}>
						<li className={`${styles.links} ml-7`}>Features</li>
						<li className={`${styles.links} ml-7`}>Pricing</li>
						<li className={`${styles.links} ml-7`}>Resources</li>
					</ul>
				</div>
				<div>
					<ul className='flex items-center shrink-1'>
						<li className={`sm:hidden`}>
							<FontAwesomeIcon
								icon={faBars}
								onClick={handleCLick}
								// onTouchStart={handleTouchStart}
								className={`{styles.textColor} cursor-pointer`}
							/>
						</li>
						<li
							className={`${styles.textColor} ${styles.links} hidden md:flex`}>
							Login
						</li>
						<li className='ml-7 hidden md:flex'>
							<button
								className={`${styles.buttonColors} rounded-full px-5 py-2`}>
								Sign Up
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
