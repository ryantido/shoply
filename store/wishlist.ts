import { WishListStore } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishList = create<WishListStore>()(
  persist(
    (set) => ({
      wishes: [],
      toggleWhished: (id: number) =>
        set((state) => {
          if (state.wishes.includes(id)) {
            return { wishes: state.wishes.filter((wish) => wish !== id) };
          } else {
            return { wishes: [...state.wishes, id] };
          }
        }),
    }),
    {
      name: "wish-list",
    }
  )
);
