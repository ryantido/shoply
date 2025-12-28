import Image from "next/image";
import { WishButton } from "./WishButton";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const ShoppingCard = ({ product }: { product: any }) => {
  const rating = product.rating ?? Number((Math.random() * 5).toFixed(1));

  return (
    <div
      key={product.id}
      className="group relative w-72 shrink-0 rounded-2xl border bg-background shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-t-2xl">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 z-10"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-transparent dark:bg-gray-200" />

        <WishButton id={product.id} />
      </div>

      <div className="flex flex-col gap-2 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold">{product.title}</h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
              )}
            />
          ))}
          <span className="ml-1">({rating})</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold">${product.price}</p>
          <Button size="sm" className="rounded-full px-4">
            Acheter
          </Button>
        </div>
      </div>
    </div>
  );
};
