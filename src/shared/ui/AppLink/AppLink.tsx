import React from "react";
import Link from "next/link";

export function AppLink({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [k: string]: unknown;
}) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
