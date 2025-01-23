"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      type="button"
      size="sm"
      className="py-2 px-0 tracking-[0.2rem] shadow-none uppercase flex items-center gap-2 text-sm transition font-bold text-muted-foreground hover:text-primary bg-transparent hover:bg-transparent"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-4 text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden size-4 text-neutral-800 dark:block dark:text-neutral-200" />
      Theme
    </Button>
  );
}
