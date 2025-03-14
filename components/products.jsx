import Card from "@/components/card";

const Products = ({ products }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {products?.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
