import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const components = [
  {
    name: 'Button',
    description: 'A button component with multiple variants and sizes.',
    href: '/docs/components/button',
  },
  {
    name: 'Input',
    description: 'A customizable input component with validation states.',
    href: '/docs/components/input',
  },
  {
    name: 'Card',
    description: 'A flexible container for grouping related content.',
    href: '/docs/components/card',
  },
  {
    name: 'Modal',
    description: 'A dialog component for displaying content in a layer above the page.',
    href: '/docs/components/modal',
  },
  {
    name: 'Table',
    description: 'A responsive table component with sorting and pagination.',
    href: '/docs/components/table',
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground">
          Browse our collection of reusable components built with Radix UI and styled with Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.name}
            href={component.href}
            className="group block rounded-lg border p-6 transition-colors hover:bg-accent/50"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{component.name}</h3>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {component.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="text-lg font-semibold">Can't find what you're looking for?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We're constantly adding new components. Check back soon or contribute to our
          open-source library.
        </p>
        <Button variant="outline" className="mt-4" asChild>
          <Link href="/contribute">
            Contribute
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
