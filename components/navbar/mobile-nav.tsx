'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sidebar } from '../../app/(app)/docs/components/sidebar';
import { cn } from '@/lib/utils';

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileNav({ className, ...props }: MobileNavProps) {
	const [isOpen, setIsOpen] = useState(false);

	// Close the menu when route changes
	useEffect(() => {
		const handleRouteChange = () => setIsOpen(false);
		window.addEventListener('popstate', handleRouteChange);
		return () => window.removeEventListener('popstate', handleRouteChange);
	}, []);

	// Disable body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<div className='md:hidden'>
			<Button
				variant='ghost'
				size='icon'
				onClick={() => setIsOpen(!isOpen)}
				className='-mr-2'
				aria-label='Toggle menu'
			>
				{isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
			</Button>

			<div
				className={cn(
					'fixed inset-0 z-40 flex transform transition-all duration-300 ease-in-out',
					isOpen ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<div
					className='fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300'
					onClick={() => setIsOpen(false)}
					aria-hidden='true'
					style={{
						opacity: isOpen ? 1 : 0,
						pointerEvents: isOpen ? 'auto' : 'none',
					}}
				/>
				<div
					className={cn(
						'relative z-50 w-72 h-full bg-background border-r overflow-y-auto transform transition-transform duration-300 ease-in-out',
						isOpen ? 'translate-x-0' : '-translate-x-full'
					)}
				>
					<div className='p-4 border-b h-16 flex items-center'>
						<h2 className='text-lg font-semibold'>Menu</h2>
					</div>
					<Sidebar />
				</div>
			</div>
		</div>
	);
}
