import {useState} from 'react';
import styles from './UrlShort.module.css';

type linkProps = {
	longLink: string;
	shortLink?: string;
};
export default function UrlShort({longLink, shortLink}: linkProps) {
	const [copy, setCopy] = useState('Copy');
	const [copyClick, setCopyClick] = useState(false);
	const [color, setColor] = useState(styles.buttonColors);

	function handleCopyClick() {
		setCopy('Copied!');
		setColor(styles.buttonClicked);
		setTimeout(() => {
			setCopy('Copy')
			setColor(styles.buttonColors)
		} , 4000);
		if (shortLink) navigator.clipboard.writeText(shortLink);
	}
	return (
		shortLink && (
			<div
				className={`${styles.backgroundColor} flex items-center justify-center w-[80%] md:w-[60%] lg:w-[110vw]  py-4 rounded-lg mb-0`}>
				<div className='flex items-center justify-between w-[80%] md:w-[60%] lg:w-[63%] bg-white py-4 px-7 rounded-lg my-5'>
					<div className='text-black'>{longLink}</div>
					<div className='flex items-center '>
						<p className={`${styles.buttonLinkColor}`}>{shortLink}</p>
						<button
							className={`${color} px-8 ml-5 border-0 rounded-md p-2 font-semibold`}
							onClick={handleCopyClick}>
							{copy}
						</button>
					</div>
				</div>
			</div>
		)
	);
}
