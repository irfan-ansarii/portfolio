import { DATA } from "@/data/resume";
import { Grip, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

const NavbarTop = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-10 flex">
      <div className="pointer-events-auto mx-auto flex min-h-full h-full items-center transform-gpu w-full backdrop-blur-lg">
        <header className="w-full max-w-3xl px-6 mx-auto">
          <div className="absolute pointer-events-none z-20 top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-background"></div>
          <BlurFade
            delay={0.08}
            yOffset={0}
            className="flex justify-between h-16 border-b border-x"
          >
            <Link href="/" className="h-16 px-6 inline-flex gap-1 items-center">
              <Home className="w-5 h-5" />
            </Link>

            <div className="group">
              <Link
                href="#"
                className="h-16 px-6 inline-flex gap-1 items-center text-sm"
              >
                <Grip className="w-5 h-5" />
              </Link>
              <div className="absolute w-52 right-0 transition duration-500 invisible group-hover:visible">
                <div className="backdrop-blur-lg border-l border-b px-6 py-10 rounded-b-xl relative bg-background shadow-lg">
                  <ul className="flex flex-col">
                    {DATA.navs.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="py-2 tracking-[0.2rem] uppercase flex text-sm transition font-bold text-muted-foreground hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </BlurFade>
        </header>
      </div>
    </div>
  );
};

export default NavbarTop;
