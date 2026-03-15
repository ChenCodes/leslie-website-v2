"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 md:py-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200/50 dark:border-zinc-800/50">
      <Link href="/" className="flex flex-col gap-0.5">
        <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Leslie Chen
        </span>
        <span className="text-xs font-medium tracking-widest text-zinc-500 dark:text-zinc-400">
          CONTENT DESIGNER
        </span>
      </Link>
      <nav className="flex items-center gap-4 md:gap-8">
        {navLinks.map(({ href, label }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#25D366]"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
