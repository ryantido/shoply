import { Heart, Settings, ShoppingBasket, User2 } from "lucide-react";

export const links = [
  {
    label: "Tableau de bord",
    href: "/dashboard",
  },
  {
    label: "Shopping",
    href: "/shop",
  },
  {
    label: "À propos",
    href: "/about-us",
  },
  {
    label: "Contactez-nous",
    href: "/contact",
  },
] as const;

export const menu = [
  {
    label: "Mon Profil",
    href: "/profile",
    icon: User2,
  },
  {
    label: "Commandes",
    href: "/profile/orders",
    icon: ShoppingBasket,
  },
  {
    label: "Liste de souhaits",
    href: "/profile/wishlist",
    icon: Heart,
  },
  {
    label: "Paramètres",
    href: "/profile/settings",
    icon: Settings,
  },
] as const;
