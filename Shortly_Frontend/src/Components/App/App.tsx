import {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import MobileMenu from '../MobileMenu/MobileMenu';
// import Shorten from '../Shorten/Shorten';
// import Statistics from '../Statistics/Statistics';
// import Boost from '../Boost/Boost';
// import Footer from '../Footer/Footer';
import './App.css';

function App() {
	const [mobileMenu, setMobileMenu] = useState(false);

	function getChildData() {
		setMobileMenu(!mobileMenu);
		console.log('mobileMenuClick in app', mobileMenu);
		// console.log('mobileMenuClick in app',);
	}

	return (
		<>
			<NavBar getChildData={getChildData} />
			{mobileMenu ? <MobileMenu styleProp={{display: 'block'}} /> : <Hero />}
			{/* <MobileMenu /> */}
			{/* <Hero /> */}
			{/* <Shorten /> */}
			{/* <Statistics /> */}
			{/* <Boost /> */}
			{/* <Footer /> */}
		</>
	);
}

export default App;
