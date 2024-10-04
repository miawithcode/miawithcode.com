type BadgeProps = {
  href: string;
  children: React.ReactNode;
};

export default function Badge({ href, children }: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-text inline-flex items-center rounded border border-border bg-neutral-50 p-1 text-sm leading-4 no-underline hover:bg-neutral-100 dark:bg-neutral-800"
    >
      {children}
    </a>
  );
}
