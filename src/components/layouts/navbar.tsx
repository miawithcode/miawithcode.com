'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { label: 'home', href: '/' },
  { label: 'vault', href: '/vault' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-4">
      <ul className="flex items-center gap-4 border-b border-border py-2">
        {routes.map((route) => (
          <li
            key={route.label}
            className={cn('text-muted', {
              'text-foreground': route.href === pathname,
            })}
          >
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
