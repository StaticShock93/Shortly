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
	const [link, setLink] = useState('');
	const [send, setSend] = useState(false);
	const [data, setData] = useState<UrlResponse | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isError, setIsError] = useState(false);

	const storedShorts: React.ReactNode[] = [];
	for (let i = 0; i < localStorage.length - 1; i++) {
		const key = localStorage.key(i);
		if (key === null || key == 'web-vitals-extension-metrics') continue;
		const value = localStorage.getItem(key);
		storedShorts.push(
			<UrlShort
				key={crypto.randomUUID()}
				longLink={key}
				shortLink={typeof value === 'string' ? value : ''}
			/>
		);
	}

	useEffect(() => {
		const postData = async () => {
			try {
				const url = 'https://spoo.me/';
				const dataToSend = new URLSearchParams();
				dataToSend.append('url', link);
				const response = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Accept: 'application/json',
					},
					body: dataToSend.toString(),
				});

				if (!response.ok) {
					throw new Error(`Error: ${response.status} ${response.statusText}`);
				}

				const result: UrlResponse | {short_url: string} = await response.json();
				setData(typeof result === 'string' ? result : result.short_url);

				storedShorts.push(
					<UrlShort
						key={crypto.randomUUID()}
						longLink={link}
						shortLink={typeof result === 'string' ? result : result.short_url}
					/>
				);
				localStorage.setItem(
					link,
					typeof result === 'string' ? result : result.short_url
				);
				console.log(localStorage);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
					console.log('Enter valid URL');
				} else {
					setError('Unknown error occurred');
				}
			} finally {
				setSend(false);
			}
		};

		if (send) {
			// Prevents immediate call on component mount
			postData();
		}
	}, [send, link]);

	const errorClassName = 'border-2 border-red-500';

	function handleClick() {
		if (!link) {
			setIsError(true);
		} else {
			setIsError(false);
		}
		setSend(true);
	}

	return (
		<section className='flex flex-col items-center justify-center pt-12 mb-0'>
			<div
				className={`w-[80%] md:w-[60%] lg:w-[70%] flex flex-col items-center ${styles.shortenBgImg} border rounded-lg mb-0 py-7`}>
				<div className='flex items-center justify-center w-[85%]'>
					<input
						className={`${
							isError ? errorClassName : ''
						} w-full border rounded-md bg-white p-3 pl-8`}
						type='text'
						placeholder='Shorten a link here...'
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
					<button
						className={`${styles.buttonColors} w-[12vw] ml-5 border-0 rounded-md p-3 font-semibold`}
						onClick={handleClick}>
						Shorten It!
					</button>
				</div>
				<div className='self-start ml-[5vw]'>
					{isError && (
						<p className='text-red-500 text-sm pl-2 mt-1'>
							<em>Please enter a valid link</em>
						</p>
					)}
				</div>
			</div>
			{storedShorts}
			{/* {urlShorts} */}
		</section>
	);
}
