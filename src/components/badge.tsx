// @ts-expect-error
export default function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="text-text inline-flex items-center rounded border border-border bg-neutral-50 p-1 text-sm leading-4 no-underline hover:bg-neutral-100 dark:bg-neutral-800"
    />
  );
}
