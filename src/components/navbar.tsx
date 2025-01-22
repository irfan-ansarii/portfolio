import { DATA } from "@/data/resume";
import { Grip, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-10 flex">
      <div className="pointer-events-auto mx-auto flex min-h-full h-full items-center transform-gpu w-full">
        <header className="container">
          <div className="absolute pointer-events-none z-20 top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-background"></div>
          <div className="flex justify-between h-16 border-x backdrop-blur-lg border-b">
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
                <div className="border-l border-b px-6 py-10 rounded-b-xl relative bg-background shadow-lg">
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
