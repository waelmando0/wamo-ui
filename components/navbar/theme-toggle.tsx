'use client';

import * as React from 'react';
import { Moon, Sun, Laptop2 } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		// <DropdownMenu>
		// 	<DropdownMenuTrigger asChild>
		// 		<Button variant="ghost" size="icon" className="w-8 h-8">
		// 			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
		// 			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		// 			<span className="sr-only">Toggle theme</span>
		// 		</Button>
		// 	</DropdownMenuTrigger>
		// 	<DropdownMenuContent align="end">
		// 		<DropdownMenuItem onClick={() => setTheme("light")}>
		// 			<Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
		// 			Light
		// 		</DropdownMenuItem>
		// 		<DropdownMenuItem onClick={() => setTheme("dark")}>
		// 			<Moon className=" h-[1.2rem] w-[1.2rem] mr-2" />
		// 			Dark
		// 		</DropdownMenuItem>
		// 		<DropdownMenuItem onClick={() => setTheme("system")}>
		// 			<Laptop2 className=" h-[1.2rem] w-[1.2rem] mr-2" />
		// 			System
		// 		</DropdownMenuItem>
		// 	</DropdownMenuContent>
		// </DropdownMenu>
		<button
			type='button'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<Sun className='visible dark:invisible dark:h-0 dark:w-0  h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='visible dark:visible dark:h-5 dark:w-5 h-0 w-0  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
		</button>
	);
}
