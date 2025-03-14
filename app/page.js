import { getAllProducts } from "@/lib/fetch";
import Products from "@/components/products.jsx";
import Filter from "@/components/filter.jsx";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="flex gap-6">
      <div>
        <Filter />
      </div>
      <div>
        <Products products={products} />
      </div>
    </div>
  );
}
