// Desc: NavBar component for the application
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<header>
			<nav className={`flex justify-between items-center py-10 px-55 font-bold ${styles.navBarColor} ${styles.textColor}`}>
				<div className='flex items-center'>
					<a href='/'>
						<img src='/src/images/logo.svg' alt='Shortly' height="300"/>
					</a>
					<ul className={`flex items-center}`}>
						<li className={`${styles.links} ml-7`}>Features</li>
						<li className={`${styles.links} ml-7`}>Pricing</li>
						<li className={`${styles.links} ml-7`}>Resources</li>
					</ul>
				</div>
				<div>
					<ul className='flex items-center'>
						<li className={`${styles.textColor} ${styles.links}`}>Login</li>
						<li className='ml-7'>
							<button className={`${styles.buttonColors} rounded-full px-5 py-2`}>Sign Up</button>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
