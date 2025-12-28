"use client";

import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useWishList } from "@/store/wishlist";
import { useShallow } from "zustand/shallow";
import { cn } from "@/lib/utils";

export const WishButton = ({ id }: { id: number }) => {
  const { wishes, toggleWhished } = useWishList(
    useShallow((state) => ({
      wishes: state.wishes,
      toggleWhished: state.toggleWhished,
    }))
  );
  const isWhished = wishes.includes(id);
  return (
    <Button
      size="icon-sm"
      variant="secondary"
      className="absolute rounded-full z-10 top-2 right-2"
      onClick={() => toggleWhished(id)}
    >
      <Heart
        className={cn(isWhished && "fill-red-500 border-red-500")}
        strokeOpacity={isWhished ? 0 : 1}
      />
    </Button>
  );
};
