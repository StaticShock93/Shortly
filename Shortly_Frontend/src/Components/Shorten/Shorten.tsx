import React, {useState} from 'react';
import styles from './Shorten.module.css';
import UrlShort from '../UrlShort/UrlShort';

// if local storage is empty, we update to default page
// if local storage has entries, render n numbers of URLShort components
//when component mounts check localStorage
// use loop to determine n number of URLShort components to render
// on all subsequent click events, render a new URLShort component
// add new shorts to localStorage
// then add to clipboard
export default function Shorten() {
	const [urlShorts, setUrlShorts] = useState<React.ReactNode[]>([]);

	function handleClick() {
		setUrlShorts((prev) => [...prev, <UrlShort key={crypto.randomUUID()} />]);
	}

	return (
		<section className='flex flex-col items-center justify-center py-12'>
			<div
				className={`w-[80%] md:w-[60%] lg:w-[70%] flex items-center justify-center ${styles.shortenBgImg} border rounded-lg`}>
				<input
					className='w-[75%] border rounded-md bg-white my-6 p-2 pl-8'
					type='text'
					placeholder='Shorten a link here...'
				/>
				<button
					className={`${styles.buttonColors} px-5 ml-5 border-0 rounded-md p-2 font-semibold`}
					onClick={handleClick}>
					Shorten It!
				</button>
			</div>
			<br />
			{urlShorts}
		</section>
	);
}
