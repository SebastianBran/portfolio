import { NAV_ITEMS } from "@/lib/constants";
import { socialLinks } from "@/data/social";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
              Pages
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-accent-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-accent-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
              About
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Built with React, Vite, TanStack Router & Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} Estefano Bran. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
