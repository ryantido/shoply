import { HeroCaroussel } from "@/components/section/HeroCaroussel";
import { PopularProducts } from "@/components/section/PopularProducts";

export default function Index() {
  return (
    <div aria-label="welcome to shoply">
      <HeroCaroussel />
      <PopularProducts/>
    </div>
  );
}
