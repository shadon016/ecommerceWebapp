import { getAllProducts } from "@/lib/fetch";
import Products from "@/components/products.jsx";
export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
