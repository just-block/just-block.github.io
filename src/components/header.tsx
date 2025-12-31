"use client";
import { Container } from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    <header className={"sm:flex sm:justify-between bg-pastel sticky top-0"}>

      <Container>
        <div
          className={
            "px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full"
          }
        >
          <div className={"flex items-center"}>
            <Link href={"/"} className={"ml-4 lg:ml-0"}>
              <JustBlockLogo />
            </Link>
          </div>

          <div className={"md:hidden"}>
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navRoutes.map((route, i) => (
                    <SheetClose asChild key={i}>
                      <Link
                        href={route.href}
                        className="block px-2 py-1 text-lg"
                      >
                        {route.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className={"mx-6 items-center space-x-2 hidden md:flex"}>
            {navRoutes
              .filter((route) => !route.isSmHidden)
              .map((route, i) => (
                <Button asChild variant={"ghost"} key={i}>
                  <Link
                    className={
                      "text-sm font-medium transition-colors hover:bg-yellow-100"
                    }
                    href={route.href}
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
