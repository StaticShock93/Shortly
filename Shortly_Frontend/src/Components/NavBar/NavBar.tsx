/**
 * Desc: NavBar component for the application
 * 1. NavBar component is a functional component.
 * 2. It takes getChildData as a prop which is a function to get the state of the mobile menu.
 * 3. It has a state hidden which is a boolean value.
 * 4. It has a function handleClick to handle the click event on the mobile menu.
 *  */

import {useState} from 'react';
import styles from './NavBar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/assets/logo.svg'

/**
 * NavBarProps
 * @param {function} getChildData - function to get the state of the mobile menu
 */
type NavBarProps = {
	getChildData: (hidden: boolean) => void;
};

/**
 * NavBar component
 * @param {NavBarProps} - props for the NavBar component
 * @returns {JSX.Element} - React component
 */
export default function NavBar({getChildData}: NavBarProps) {
	const [hidden, setHidden] = useState(false);

	/**
	 * handleCLick
	 * @description - function to handle the click event on the mobile menu
	 */
	const handleCLick = () => {
		console.log('click', hidden);
		setHidden((prevHidden: boolean) => {
			const newHidden = !prevHidden;
			getChildData(newHidden);
			return newHidden;
		});
		getChildData(hidden);
	};

	return (
		<header>
			<nav
				className={`flex justify-between items-center pt-5 px-8 md:py-10 md:px-45 font-bold ${styles.textColor}`}>
				<div className='flex items-center'>
					<a href='/'>
						<img src={logo} alt='Shortly' height='300' />
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
