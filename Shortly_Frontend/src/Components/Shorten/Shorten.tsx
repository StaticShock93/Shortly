import React, {useState, useEffect} from 'react';
import styles from './Shorten.module.css';
import UrlShort from '../UrlShort/UrlShort';

// if local storage is empty, we update to default page
// if local storage has entries, render n numbers of URLShort components
//when component mounts check localStorage
// use loop to determine n number of URLShort components to render
// on all subsequent click events, render a new URLShort component
// add new shorts to localStorage
// then add to clipboard

type UrlResponse = string;

export default function Shorten() {
	const [urlShorts, setUrlShorts] = useState<React.ReactNode[]>([]);
	const [link, setLink] = useState('');
	const [send, setSend] = useState(false);
	const [data, setData] = useState<UrlResponse | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const postData = async () => {
			try {
				const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
					method: 'POST',
					headers: {
						Authorization: `Bearer a9f0ad861f29823a1657744b0aeacbdf2df7db38`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						long_url: link,
					}),
				});

				if (!response.ok) {
					throw new Error(`Error: ${response.status} ${response.statusText}`);
				}

				const result: UrlResponse = await response.json();
				setData(result);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('Unknown error occurred');
				}
			}
		};

		// if (send) {
			// Preventing immediate call on component mount
			postData();
		// }
	}, [send]);

	function showUrl() {
		
	}

	function handleClick() {
		setUrlShorts((prev) => [
			...prev,
			<UrlShort
				key={crypto.randomUUID()}
				longLink={link}
				shortLink={JSON.stringify(data?.link)}
			/>,
		]);
		setSend(!send);
		console.log('DATA', data);
	}

	return (
		<section className='flex flex-col items-center justify-center pt-12 mb-0'>
			<div
				className={`w-[80%] md:w-[60%] lg:w-[70%] flex items-center justify-center ${styles.shortenBgImg} border rounded-lg mb-0`}>
				<input
					className='w-[75%] border rounded-md bg-white my-8 p-2 pl-8'
					type='text'
					placeholder='Shorten a link here...'
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
				<button
					className={`${styles.buttonColors} px-5 ml-5 border-0 rounded-md p-2 font-semibold`}
					onClick={handleClick}>
					Shorten It!
				</button>
			</div>
			{urlShorts}
		</section>
	);
}
