import Image from "next/image";

const Card = ({ product }) => {
  return (
    <div className="w-48 p-4">
      <Image src={product?.image} width="48" height="48" alt={product.title} />
      <div>
        <p className="text-xs">{product?.title}</p>
      </div>
      <div>
        <p>{product?.price}</p>
      </div>
    </div>
  );
};

export default Card;
