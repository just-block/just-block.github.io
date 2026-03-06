"use client";
import { Container } from "@/components/container";
import Link from "next/link";
import { Menu } from "lucide-react";
import React from "react";
import { JustBlockLogo } from "@/components/just-block-logo";
import { navRoutes } from "@/app/navRoutes";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-[#faf6eb]/95 backdrop-blur-md border-b transition-colors duration-200 ${scrolled ? "border-amber-200/60" : "border-transparent"}`}>
      <Container>
        <div className="px-6 lg:px-8 flex h-14 items-center justify-between w-full">
          <Link href="/" className="ml-4 lg:ml-0">
            <JustBlockLogo />
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-5 w-5 text-amber-900/70" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#faf6eb]">
                <nav className="flex flex-col gap-1 mt-6">
                  {navRoutes.map((route, i) => (
                    <SheetClose asChild key={i}>
                      <Link
                        href={route.href}
                        className="block px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-amber-950/50 hover:text-amber-900 transition-colors duration-200"
                      >
                        {route.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop nav */}
          <nav className="items-center gap-6 hidden md:flex">
            {navRoutes
              .filter((route) => !route.isSmHidden)
              .map((route, i) => (
                <Link
                  key={i}
                  href={route.href}
                  className="py-1 text-[13px] font-semibold uppercase tracking-[0.08em] text-amber-900/70 hover:text-amber-900 border-b border-transparent hover:border-amber-300 transition-all duration-200"
                >
                  {route.label}
                </Link>
              ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
