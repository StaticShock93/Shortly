// Desc: This file contains the Hero component which is the first section of the landing page.
// 1. Hero component is a functional component.
// 2. It contains a section with two divs.
// 3. The first div contains an image and the second div contains a heading, paragraph, and a button.

import styles from './Hero.module.css';
import illustrationWorking from '../../assets/assets/illustration-working.svg'

/**
 * Hero component
 * @returns {JSX.Element} - React component
 */
export default function Hero() {
	return (
		<section
			className={`flex flex-col md:flex-row items-center md:justify-between md:mt-10 md:ml-33 lg:ml-45 md:w-[95vw] md:max-w-[100vw]`}>
			<div
				className={`md:order-2 flex items-center justify-center pl-20 shrink-1`}>
				<img src={illustrationWorking} alt='illustration' />
			</div>
			<div
				className={`md:order-1 flex flex-col items-center md:items-start justify-center shrink-1 text-center md:text-left mt-5 md:mt-0`}>
				<h1
					className={`text-2xl md:text-4xl lg:text-6xl font-bold ${styles.titleColor}`}>
					More than just shorter links
				</h1>
				<p className={`mt-5 ${styles.textColor}`}>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<button
					className={`${styles.buttonColors} mt-5 rounded-full px-5 py-2 shrink-1 font-bold`}>
					Get Started
				</button>
			</div>
		</section>
	);
}
