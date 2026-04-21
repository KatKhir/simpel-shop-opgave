"use client";

import Link from "next/link";
import FavoriteIcon from "./FavoriteIcon";
import useBasket from "@/store/Basket";
import { useEffect, useState } from "react";

const ProductList = () => {
  return (
    <div className="flex justify-start ">
      <div className="w-[70vw] h-[80vh] overflow-y-auto bg-[#FAF6EA] rounded-2xl p-4 mr-5 mt-5 mb-5 ml-10">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 justify-center">
          <FetchProductList />
        </ul>
      </div>
    </div>
  );
};

const FetchProductList = async () => {
  const url = "https://dummyjson.com/products";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.products.map((product) => {
      return (
        <li key={product.id} className="bg-white  w-fit mb-5 rounded-lg shadow-md">
          <div className="relative">
            <FavoriteIcon />
            <Link href={`/detail-product-page/${product.id}`}>
              <img className="rounded-t-lg" src={product.thumbnail} alt={product.title} width={300} height={400} />
            </Link>
          </div>
          <div className="pl-4 py-2 pr-4">
            <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">{product.brand}</h3>
            <h4 className="text-black pb-4">{product.title}</h4>
            <div className="flex justify-between">
              <p className="text-black font-bold text-xl">{product.price} kr.</p>
              <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
            </div>
          </div>
        </li>
      );
    });
  } catch (error) {
    return <p>Der skete en fejl...</p>;
  }
};
export default ProductList;
