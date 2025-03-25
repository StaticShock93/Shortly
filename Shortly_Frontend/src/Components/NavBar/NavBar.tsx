// Desc: NavBar component for the application
import React, {useState} from 'react';
import styles from './NavBar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
	const [hidden, setHidden] = useState(false);

	const handleTouchStart = (event: React.TouchEvent) => {
		console.log('touch start', event);
		setHidden(true);
	};
	return (
		<header>
			<nav
				className={`flex justify-between items-center py-5 px-8 md:py-10 md:px-33 font-bold ${styles.navBarColor} ${styles.textColor}`}>
				<div onTouchStart={handleTouchStart} className='flex items-center'>
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
							<FontAwesomeIcon icon={faBars} />
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
