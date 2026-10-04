"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";

import { cn } from "@/lib/utils";
import { useFavorite } from "@/context/FavoriteContext";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
  { href: "/users", label: "User Directory" },
  { href: "/favorite", label: "Favorite" },
  { href: "/messages", label: "Messages" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { name, submitted } = useUser();
  const { favorites } = useFavorite();
  const [open, setOpen] = useState(false);

  const isLinkActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <nav
        className={cn(
          "border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl",
          // rounded-full only when closed -- a tall open dropdown with
          // rounded-full turns into the big oval shape from the screenshot
          open ? "rounded-[28px]" : "rounded-[28px] sm:rounded-full"
        )}
      >
        <div className="flex items-center gap-4">
          {/* Hamburger now comes first, so it sits to the left of the logo */}
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>

          <Link
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight"
          >
            Svarati
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1 text-sm text-muted-foreground lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                  isLinkActive(link.href) && "bg-foreground/10 text-foreground"
                )}
              >
                {link.href === "/favorite"
                  ? `${link.label} (${favorites.length}) `
                  : link.label}
              </Link>
            ))}
          </div>

          {submitted && (
            <span className="hidden shrink-0 whitespace-nowrap xl:inline">
              Hi, {name} 👋
            </span>
          )}

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "ml-auto hidden shrink-0 rounded-full lg:ml-0 lg:inline-flex"
            )}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pb-2 pt-3 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground",
                  isLinkActive(link.href) && "bg-foreground/10 text-foreground"
                )}
              >
                {link.href === "/favorite"
                  ? `${link.label} (${favorites.length}) `
                  : link.label}
              </Link>
            ))}

            {submitted && (
              <span className="px-3 py-2 text-sm">Hi, {name} 👋</span>
            )}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "sm" }),
                "mx-3 mt-1 justify-center rounded-full"
              )}
            >
              Get in touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
