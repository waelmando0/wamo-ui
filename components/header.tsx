import React from 'react';
import Logo from './navbar/logo';
import Navbar from './navbar/nav';
import { ThemeToggle } from './navbar/theme-toggle';

const Header = () => {
	return (
		<header className='bg-background sticky top-0 z-50 w-full'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex items-center gap-2 py-3'>
					{/* Logo */}
					<Logo />
					<Navbar />
					<div className='hidden flex-1 items-center justify-end md:flex space-x-4'>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
