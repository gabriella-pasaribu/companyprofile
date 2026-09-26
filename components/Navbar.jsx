"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useFavorite } from "@/context/FavoriteContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
  { href: "/users", label: "User Directory" },
  { href: "/favorite", label: "Favorite" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorite();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-4xl px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
          Svarati
        </Link>

        <div className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                  isActive && "bg-foreground/10 text-foreground"
                )}
              >
                {link.href === "/favorite"
                  ? `${link.label} (${favorites.length}) `
                  : link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}