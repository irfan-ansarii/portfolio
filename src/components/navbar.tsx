import { DATA } from "@/data/resume";
import { Grip, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import BlurFade from "./magicui/blur-fade";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-10 flex">
      <div className="pointer-events-auto mx-auto flex min-h-full h-full items-center transform-gpu w-full">
        <div className="absolute pointer-events-none z-20 top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-background"></div>
        <header className="container">
          <div className="relative">
            <BlurFade className="absolute inset-x-0 backdrop-blur-lg h-16 z-[19] border-b border-x">
              <span></span>
            </BlurFade>
          </div>
          <div className="flex justify-between h-16 relative z-30">
            <BlurFade delay={0.2}>
              <Link
                href="/"
                className="h-16 px-6 inline-flex gap-1 items-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <Home className="size-5" />
              </Link>
            </BlurFade>
            <div className="group">
              <BlurFade delay={0.2}>
                <Link
                  href="#"
                  className="h-16 px-6 inline-flex gap-1 items-center text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Grip className="size-6" />
                </Link>
              </BlurFade>
              <div className="absolute w-52 right-[1px] transition duration-500 invisible group-hover:visible">
                <div className="border-l border-b px-6 py-10 rounded-b-xl relative backdrop-blur-lg shadow-lg">
                  <ul className="flex flex-col">
                    {DATA.navbar.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="py-2 tracking-[0.2rem] uppercase flex text-sm transition font-bold text-muted-foreground hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li className="border-b my-2"></li>
                    <li>
                      <ModeToggle />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
