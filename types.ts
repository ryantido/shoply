import { auth } from "@/lib/auth";

export type Session = typeof auth.$Infer.Session | null;
export type Theme = "light" | "dark";

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface WishListStore {
  wishes: number[],
  toggleWhished: (id: number) => void
}
