import React from 'react';
import styles from './MobileMenu.module.css';

type MobileMenuProps = {
	styleProp?: React.CSSProperties;
};

export default function MobileMenu({styleProp}: MobileMenuProps) {
	return (
		<section style={styleProp} className={`${styles.bg}`}>
			<div
				className={`${styles.mobileMenuBg} ${styles.whiteTextColor} p-5 border rounded-xl font-semibold`}>
				<ul className='flex flex-col items-center '>
					<li className='py-2'>
						<a href='#'>Features</a>
					</li>
					<li className='py-2'>
						<a href='#'>Pricing</a>
					</li>
					<li className='py-2'>
						<a href='#'>Resources</a>
					</li>
				</ul>
				<hr className={`${styles.hr}`} />
				<div>
					<ul className='flex flex-col items-center'>
						<li className='py-2'>
							<a href='#'>Login</a>
						</li>
						<li className='pt-2'>
							<button className={`${styles.buttonColors} rounded-full px-[6rem] py-2`}>
								<a href='#'>Sign Up</a>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center shrink-1 text-center'>
				<h1 className={`text-3xl font-extrabold ${styles.titleColor} px-10`}>
					More than just shorter links
				</h1>
				<p className={`mt-5 ${styles.textColor} px-10`}>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
			</div>
		</section>
	);
}
