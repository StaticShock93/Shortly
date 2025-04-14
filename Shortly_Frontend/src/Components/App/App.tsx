import {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import MobileMenu from '../MobileMenu/MobileMenu';
import Shorten from '../Shorten/Shorten';
import Statistics from '../Statistics/Statistics';
import Boost from '../Boost/Boost';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';
// import {useQuery} from '@tanstack/react-query';

/**
 * App component
 * @returns {JSX.Element} - React component
 *
 */


function App() {
	const [mobileMenu, setMobileMenu] = useState(false);

	/**
	 * getChildData
	 * @returns {void}
	 * @description - function to get the state of the mobile menu
	 */
	function getChildData() {
		setMobileMenu(!mobileMenu);
		console.log('mobileMenuClick in app', mobileMenu);
	}

	return (
		<section>
			<NavBar getChildData={getChildData} />
			{/* conditionally renders Mobile Menu and Hero section */}
			{mobileMenu ? <MobileMenu styleProp={{display: 'block'}} /> : <Hero />}
			<section
				className={`${styles.shortLinkAndStatisticsBgColor} ${styles.container} flex flex-col min-h-screen h-auto mt-28 mb-0`}>
				<div className={`${styles.shortenPosition} flex-shrink-1`}>
					{/* Render Shorten components */}
					<Shorten />
					{/* Ensure Statistics is directly below Shorten */}
					<div
						className={`flex flex-col items-center justify-center min-h-[50vh] bg-[#eff1f7] mt-0`}>
						<Statistics />
						<div>
							<Boost />
							<Footer />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default App;
