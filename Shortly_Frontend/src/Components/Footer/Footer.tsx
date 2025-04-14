// import React from 'react';
// import styles from './Footer.module.css';
import fbIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';
import instagramIcon from '../../images/icon-instagram.svg';

export default function Footer() {
	return (
		<section className='bg-[#232127] text-white flex justify-between p-20 px-30'>
			<div>
				<h1 className='font-bold text-4xl'>Shortly</h1>
			</div>
			<div className='flex justify-between pl-15 pr-0'>
				<div className='px-5 flex flex-col items-start justify-start w-40'>
					<h6 className='font-bold'>Features</h6>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Link Shortening
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Branded Links
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Analytics
					</p>
				</div>
				<div className='px-5  w-40 flex flex-col items-start justify-start'>
					<h6 className='font-bold'>Resources</h6>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Blogs
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Developers
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Support
					</p>
				</div>
				<div className='px-5  w-40 flex flex-col items-start justify-start'>
					<h6 className='font-bold'>Company</h6>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						About
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Our Team
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Careers
					</p>
					<p className='mt-3 font-extralight cursor-pointer hover:text-[#2BD0D0]'>
						Contact
					</p>
				</div>
			</div>
			<div className='flex'>
				<a className='px-2' href='#'>
					<img
						className='hover:text-[#2BD0D0]'
						src={fbIcon}
						alt='Facebook Icon '
					/>
				</a>
				<a className='px-2' href='#'>
					<img
						className='hover:text-[#2BD0D0]'
						src={twitterIcon}
						alt='Twitter Icon'
					/>
				</a>
				<a className='px-2' href='#'>
					<img
						className='hover:text-[#2BD0D0]'
						src={pinterestIcon}
						alt='Pinterest Icon'
					/>
				</a>
				<a className='px-2' href='#'>
					<img
						className='hover:text-[#2BD0D0]'
						src={instagramIcon}
						alt='Instagram Icon'
					/>
				</a>
			</div>
		</section>
	);
}
