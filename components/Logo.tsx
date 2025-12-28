import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const AppLogo = () => {
  return (
    <Link href="/">
      <h1 className="font-semibold text-2xl inline-flex items-center">
        <span className="text-red-500 uppercase">S</span>hoply
        <ShoppingBag className="text-red-500 ml-1" />
      </h1>
    </Link>
  );
};
