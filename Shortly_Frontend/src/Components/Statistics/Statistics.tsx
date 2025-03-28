import brandRecognitionIcon from '../../images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../images/icon-fully-customizable.svg';

export default function Statistics() {
	return (
		<section className='bg-[#eff1f7] mt-0 w-[70vw]'>
			<div className='flex flex-col justify-center items-center text-center'>
				<h2 className='text-3xl font-bold  text-[#34313D]'>
					Advanced Statistics
				</h2>
				<br />
				<h5 className='flex justify-center text-center  text-[#9E9AA8]'>
					Track how your links are performing across the web with <br />
					our advanced statistics dashboard.
				</h5>
			</div>
			{/* CARDS ROW */}
			{/* CARDS ROW should also contain a straight bar that is positioned underneath all cards */}
			<div className='cardsRow py-15 flex justify-between relative'>
				{/* Line Bisector Open  */}
				<div className='lineBisector absolute top-[180px] z-0 w-[60vw] h-2 bg-[#2BD0D0]'></div>
				{/* CARD 1 START */}
				<div className='flex justify-between w-[80w]'>
					<div className='relative border-0 rounded-lg card1 bg-white h-55 w-75 flex flex-col justify-center mb-20'>
						<div className='absolute top-[-40px] left-[25px] flex justify-center items-center h-19 w-19 bg-[#3A3054] border-0 rounded-full object-cover'>
							<img
								src={brandRecognitionIcon}
								alt='Brand Recognition icon'
								className='p-[1.2rem]'
							/>
						</div>
						<h6 className='font-bold text-lg px-6 pt-8'>Brand Recognition</h6>
						<p className='pt-2 px-6 leading-relaxed text-sm text-[#9E9AA8]'>
							Boost your brand recognition with each click. Generic links don’t
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
				</div>
				{/* CARD 2 START */}
				<div>
					<div className='relative border-0 rounded-lg card1 bg-white h-55 w-75 flex flex-col justify-center mb-20'>
						<div className='absolute top-[-40px] left-[25px] flex justify-center items-center h-19 w-19 bg-[#3A3054] border-0 rounded-full object-cover'>
							<img
								src={detailedRecordsIcon}
								alt='Deatailed Records icon'
								className='p-[1.2rem]'
							/>
						</div>
						<h6 className='font-bold text-lg px-6 pt-8'>Deatailed Records</h6>
						<p className='pt-2 px-6 leading-relaxed text-sm text-[#9E9AA8]'>
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</div>
				</div>
				{/* CARD 3 START */}
				<div>
					<div className='relative border-0 rounded-lg card1 bg-white h-55 w-75 flex flex-col justify-center mb-20'>
						<div className='absolute top-[-40px] left-[25px] flex justify-center items-center h-19 w-19 bg-[#3A3054] border-0 rounded-full object-cover'>
							<img
								src={fullyCustomizableIcon}
								alt='Fully Customizable icon'
								className='p-[1.2rem]'
							/>
						</div>
						<h6 className='font-bold text-lg px-6 pt-8'>Fully Customizable</h6>
						<p className='pt-2 px-6 leading-relaxed text-sm text-[#9E9AA8]'>
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
