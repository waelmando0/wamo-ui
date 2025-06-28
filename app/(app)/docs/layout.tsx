import Header from '@/components/Header';
import { Sidebar } from '@/app/(app)/docs/components/sidebar';

export default function ComponentsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative flex flex-col min-h-svh bg-background '>
			<div className='fixed inset-y-0 left-0 w-64 border-r bg-background hidden lg:flex'>
				<Sidebar />
			</div>
			<div className='lg:ml-64'>
				<Header />
				<main className='flex-1'>
					<div className='py-12 px-6'>{children}</div>
				</main>
			</div>
		</div>
	);
}
