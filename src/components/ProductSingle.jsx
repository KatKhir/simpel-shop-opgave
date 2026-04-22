"use client";

import FavoriteIcon from "@/components/FavoriteIcon";
import Link from "next/link";
import useBasket from "@/store/Basket";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProductSingle = ({ product }) => {
  const addToCart = useBasket((state) => state.addToCart);
  return (
    <div className="flex flex-col md:flex-row mb-10">
      <img className="rounded-lg bg-white mr-5" src={product.thumbnail} alt={product.title} width={350} height={350} />
      <div>
        <Link className="flex gap-2 block my-2" href="/productListPage">
          <FaArrowLeftLong className="mt-1" />
          Tilbage til produkter
        </Link>
        <h3 className="mb-1 text-xl text-gray-400 underline decoration-gray-400 underline-offset-2.5">{product.brand}</h3>
        <h4 className="text-black pb-4">{product.title}</h4>
        <p className="mb-4 max-w-[50ch] text-black pb-4">{product.description}</p>
        <p className="mb-3 text-black font-bold text-xl">{product.price}$</p>
        <div className="flex gap-4">
          <button onClick={() => addToCart(product)} className="cursor-pointer border border-black px-2 rounded-md">
            Add +
          </button>
          <FavoriteIcon id={product.id} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
