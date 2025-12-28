"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeStore } from "@/store/theme";

export const Toggle = () => {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const theme = useThemeStore((s) => s.theme);
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      className="ml-auto"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};
