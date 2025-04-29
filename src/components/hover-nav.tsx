"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Grip } from "lucide-react";
import { motion } from "framer-motion";

import { DATA } from "@/data/resume";

import BlurFade from "@/components/magicui/blur-fade";
import { ModeToggle } from "@/components/mode-toggle";

const glowVariants = {
  initial: {
    opacity: 0,
    scaleY: 0,
    transition: {
      opacity: { duration: 0.5, type: "linear" },
      scale: { duration: 0.3, type: "linear" },
    },
  },
  hover: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { duration: 0.1, type: "linear" },
      scale: { duration: 0.3, type: "linear" },
    },
  },
};
const HoverNav = () => {
  const [active, setActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div>
      <BlurFade delay={0.2}>
        <motion.a
          href="#"
          className="h-16 px-6 inline-flex gap-1 items-center text-sm opacity-60 hover:opacity-100 transition-opacity"
          onClick={handleClick}
        >
          <Grip className="size-6" />
        </motion.a>
      </BlurFade>

      <motion.div
        className="absolute right-[1px] w-52"
        variants={glowVariants}
        animate={active ? "hover" : "initial"}
        style={{
          transformOrigin: "top",
          opacity: 0,
          scaleY: 0,
        }}
      >
        <div className="border-l border-b px-6 py-10 rounded-b-xl relative backdrop-blur-xl bg-background/50 shadow-lg">
          <ul className="flex flex-col">
            {DATA.navbar.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="py-2 tracking-[0.2rem] uppercase flex text-sm font-bold text-muted-foreground hover:text-primary transition-all ml-0 hover:ml-1"
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
      </motion.div>
    </div>
  );
};

export default HoverNav;
