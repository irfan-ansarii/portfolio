"use client";

import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type WobbleContextType = {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

const WobbleContext = createContext<WobbleContextType | null>(null);

export const WobbleRoot = ({
  children,
  containerClassName,
}: {
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", containerClassName)}
    >
      <WobbleContext.Provider
        value={{
          mousePosition,
          isHovering,
          handleMouseMove,
          handleMouseEnter,
          handleMouseLeave,
        }}
      >
        {children}
      </WobbleContext.Provider>
    </div>
  );
};

export const Wobble = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const context = useContext(WobbleContext);

  if (!context) {
    throw new Error("Wobble must be used inside a WobbleRoot");
  }

  const { mousePosition, isHovering } = context;

  return (
    <motion.div
      style={{
        transform: isHovering
          ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
};
