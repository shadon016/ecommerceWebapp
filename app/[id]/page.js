import { getAllProducts } from "@/lib/fetch";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getAllProducts(id);
  return <div>{product?.title}</div>;
};

export default DetailsPage;
