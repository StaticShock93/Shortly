import React from 'react';
import styles from './Shorten.module.css';
import UrlShort from '../UrlShort/UrlShort';

export default function Shorten() {
	return (
		<section className='flex flex-col items-center justify-center py-12'>
			<div className={`w-[80%] md:w-[60%] lg:w-[70%] flex items-center justify-center ${styles.shortenBgImg} border rounded-lg`}>
					<input className='w-[75%] border rounded-md bg-white my-6 p-2 pl-8' type='text' placeholder='Shorten a link here...' />
					<button className={`${styles.buttonColors} px-5 ml-5 border-0 rounded-md p-2 font-semibold`}>Shorten It!</button>
			</div>
            <br />
			<UrlShort />
		</section>
	);
}
