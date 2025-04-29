import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import HoverNav from "@/components/hover-nav";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-10 flex">
      <div className="pointer-events-auto mx-auto flex min-h-full h-full items-center transform-gpu w-full">
        <div className="absolute pointer-events-none z-20 top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
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

            <HoverNav />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
