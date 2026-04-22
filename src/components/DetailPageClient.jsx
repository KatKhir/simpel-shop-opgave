"use client";
import BasketList from "@/components/BasketList";
import Related from "@/components/Related";
import ProductSingle from "@/components/ProductSingle";
import { FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const DetailPageClient = ({ product, relatedProducts }) => {
  const [openBasket, setOpenBasket] = useState(false);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <FaShoppingCart className="w-10 h-10 [@media(min-width:1145px)]:hidden cursor-pointer" onClick={() => setOpenBasket(true)} />
      </div>

      <div className="flex items-start">
        <div className="w-[70vw] bg-[#FAF6EA] rounded-2xl p-4 mr-5 mt-5 mb-5 ml-10">
          <ProductSingle product={product} />
          <Related relatedProducts={relatedProducts} />
        </div>
        <div className="[@media(max-width:1145px)]:hidden">
          <BasketList />
        </div>
      </div>

      {openBasket && (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
          <div className="absolute inset-0" onClick={() => setOpenBasket(false)} />
          <div className="w-full max-w-90 bg-[#FAF6EA] h-full shadow-lg relative p-4">
            <FaXmark className="w-6 h-6 cursor-pointer absolute top-4 right-4" onClick={() => setOpenBasket(false)} />
            <BasketList />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPageClient;
