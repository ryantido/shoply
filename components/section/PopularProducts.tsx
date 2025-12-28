import { ShoppingCard } from "../ShoppingCard";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/carts?limit=2&skip=4");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products", { cause: error });
  }
};

export const PopularProducts = async () => {
  const data = await fetchProducts();

  return (
    <div className="flex gap-6 overflow-x-auto py-4">
      {data.carts.flatMap((cart: any) =>
        cart.products.map((product: any) => (
          <ShoppingCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
