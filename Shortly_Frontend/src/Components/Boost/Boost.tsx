import styles from './Boost.module.css';

export default function Boost() {
	return (
		<section className=''>
			<div
				className={`${styles.boostBgImg} flex flex-col items-center justify-center mb-0 bg-[#eff1f7] h-auto min-h-[45vh]`}>
				<h2 className='text-3xl font-bold text-center text-white mb-5'>
					Boost your links today
				</h2>
				<button
					className={`${styles.buttonColors} text-white px-8 py-4 rounded-full mt-5 font-semibold`}>
					Get Started
				</button>
			</div>
		</section>
	);
}
