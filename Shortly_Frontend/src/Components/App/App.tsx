import {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import MobileMenu from '../MobileMenu/MobileMenu';
// import Shorten from '../Shorten/Shorten';
// import Statistics from '../Statistics/Statistics';
// import Boost from '../Boost/Boost';
// import Footer from '../Footer/Footer';
import './App.css';

/**
 * App component
 * @returns {JSX.Element} - React component
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
		<>
			<NavBar getChildData={getChildData} />
			{/* conditionally renders Mobile Menu and Hero section */}
			{mobileMenu ? <MobileMenu styleProp={{display: 'block'}} /> : <Hero />}
			{/* <Shorten /> */}
			{/* <Statistics /> */}
			{/* <Boost /> */}
			{/* <Footer /> */}
		</>
	);
}

export default App;
