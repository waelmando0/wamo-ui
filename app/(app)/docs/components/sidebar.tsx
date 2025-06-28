'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Dropdown', href: '/docs/components/dropdown' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Modal', href: '/docs/components/modal' },
    ],
  },
];

interface NavSectionProps {
  title: string;
  items: { title: string; href: string }[];
  pathname: string;
}

function NavSection({ title, items, pathname }: NavSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground px-2">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'block py-1.5 px-3 text-sm rounded-md transition-colors',
              pathname === item.href
                ? 'bg-accent text-accent-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full flex flex-col">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Wamo UI</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-2 space-y-6 overflow-y-auto">
        {navItems.map((section) => (
          <NavSection
            key={section.title}
            title={section.title}
            items={section.items}
            pathname={pathname}
          />
        ))}
      </nav>
      <div className="p-4 border-t">
        <p className="text-xs text-muted-foreground">
          Built with ❤️ by Wamo Team
        </p>
      </div>
    </div>
  );
}
