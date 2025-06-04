'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MenuLink {
	route: string;
	label: string;
	active: React.ReactNode;
}

const Navbar = () => {
	const pathname = usePathname();

	const links: MenuLink[] = [
		{ route: '/', label: 'Components', active: pathname === `/` },
		{ route: '/blocks', label: 'Blocks', active: pathname === `/blocks` },
	];

	return (
		<nav className='hidden sm:flex items-center'>
			<ul className='flex items-center gap-0.5'>
				{links.map((item) => (
					<li key={item.route}>
						<Link
							href={item.route}
							className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 '
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
