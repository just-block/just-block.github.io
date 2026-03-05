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
  return (
    <header className="sticky top-0 z-50 bg-[#fefdf7]/90 backdrop-blur-md border-b border-amber-200/40">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <Link href="/" className="ml-4 lg:ml-0">
            <JustBlockLogo />
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-5 w-5 text-amber-900/70" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#fefdf7]">
                <nav className="flex flex-col gap-1 mt-4">
                  {navRoutes.map((route, i) => (
                    <SheetClose asChild key={i}>
                      <Link
                        href={route.href}
                        className="block px-3 py-2.5 text-[15px] text-amber-950/60 hover:text-amber-900 hover:bg-amber-100/50 rounded-md transition-colors"
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
          <nav className="items-center gap-1 hidden md:flex">
            {navRoutes
              .filter((route) => !route.isSmHidden)
              .map((route, i) => (
                <Link
                  key={i}
                  href={route.href}
                  className="px-3.5 py-2 text-[14px] font-medium text-amber-950/55 hover:text-amber-900 hover:bg-amber-100/60 rounded-md transition-colors duration-200"
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
