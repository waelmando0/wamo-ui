'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Palette, SplinePointer, Wrench } from 'lucide-react';
import Link from 'next/link';

const features = [
	{
		title: 'Composable',
		description:
			'Easily combine components to create complex layouts and interactions.',
		icon: <SplinePointer className='inline-block mb-2 text-2xl' />,
	},
	{
		title: 'Accessible',
		description:
			'Built with accessibility in mind, ensuring your applications are usable by everyone.',
		icon: <Wrench className='inline-block mb-2 text-2xl' />,
	},
	{
		title: 'Customizable',
		description:
			"Customize the look and feel of components to match your brand's design system.",
		icon: <Palette className='inline-block mb-2 text-2xl' />,
	},
];

const page = () => {
	return (
		<div className='flex flex-col items-center gap-4'>
			{/* Hero Section */}
			<section className='flex justify-center mt-32'>
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
						Welcome to Wamo UI
					</h1>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
						Beautifully designed components built with Radix UI and Tailwind CSS.
					</p>
					</div>
					<div className="space-x-4">
					<Button asChild>
						<Link href="/docs">
						Get Started
						<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/components">
						Browse Components
						</Link>
					</Button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='mt-8'>
				<h2 className='text-3xl font-extrabold mb-2'>Features</h2>
				<p className='text-lg text-muted-foreground mb-8'>
					Our component library offers a range of features designed to enhance
					your development workflow and improve the user experience of your
					applications.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					{features.map((feature) => (
						<div
							key={feature.title}
							className='border rounded-xl p-6 bg-background flex flex-col items-start shadow-sm hover:shadow-md transition-shadow min-h-[180px]'
						>
							{feature.icon}
							<h3 className='font-bold text-lg mb-1'>{feature.title}</h3>
							<p className='text-muted-foreground text-base'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default page;
