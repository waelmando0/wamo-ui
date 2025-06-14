import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';
import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/providers/theme-provider';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ['Next.js', 'React', 'Tailwind CSS', 'Components', 'wamo'],
	authors: [
		{
			name: 'wael',
			url: 'https://github.com/waelmando0',
		},
	],
	creator: 'wael',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'	suppressHydrationWarning={true}>
			<body
				className={cn(fontSans.variable, 'dark:bg-slate-900/90')}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
				>
					<div className='relative flex flex-col min-h-svh bg-background '>
						<main className='flex-1'>
							<div className='max-w-7xl mx-auto px-6'>{children}</div>
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
