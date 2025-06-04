import { Fira_Sans as FontSans } from 'next/font/google';

export const fontSans = FontSans({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-sans',
});
