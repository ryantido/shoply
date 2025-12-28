"use client";

import { useThemeStore } from "@/store/theme";
import { useEffect } from "react";

export function ThemeInit() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null;
}
