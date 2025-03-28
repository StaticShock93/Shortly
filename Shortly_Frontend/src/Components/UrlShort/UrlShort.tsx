import React from 'react';
import styles from './UrlShort.module.css';

export default function UrlShort() {
	return (
		<div className={`${styles.backgroundColor} flex items-center justify-center w-[80%] md:w-[60%] lg:w-[110vw]  py-4 rounded-lg mb-0`}>
			<div className='flex items-center justify-between w-[80%] md:w-[60%] lg:w-[70%] bg-white py-4 px-7 rounded-lg my-5'>
				<div className='text-black'>'link'</div>
				<div className='flex items-center '>
					<div className={`${styles.buttonLinkColor}`}>'shortLink'</div>
					<button
						className={`${styles.buttonColors} px-8 ml-5 border-0 rounded-md p-2 font-semibold`}>
						'Copy'
					</button>
				</div>
			</div>
		</div>
	);
}
