import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<>
			<Link
				href='/'
				className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium  outline-none  pr-3'
			>
				<span className='font-bold text-xl '>X</span>
			</Link>
		</>
	);
};

export default Logo;
