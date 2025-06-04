import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<>
			<Link
				href='/'
				className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5'
			>
				<span className='font-bold text-xl '>X</span>
			</Link>
		</>
	);
};

export default Logo;
