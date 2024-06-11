import { Link as RouterLink } from "@tanstack/react-router";

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <RouterLink to={href} className="text-green-700 hover:underline">
      {children}
    </RouterLink>
  );
}
