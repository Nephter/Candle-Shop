import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

import { navbarLinksList, NavProps } from "@/src/config/nav";
import { siteConfig } from "@/src/config/site";
import Link from "next/link";
import CandleLight from "@/public/candleLight";

const { title } = siteConfig;

export const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-xl flex space-x-2 items-center">
              <CandleLight />
              <span className="hidden md:block pt-1 tracking-wider" style={{ fontFamily: "Kaushan" }}>{title}</span>
            </a>
          </NavigationMenuItem>
          <div className="flex-grow" />

          {/* desktop */}
          <nav className="hidden md:flex gap-2" >
            {navbarLinksList.map((route: NavProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`tracking-widest text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                <p className="" style={{ fontFamily: "Kaushan" }}>
                  {route.label}
                </p>
              </Link>
            ))}
          </nav>



        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
