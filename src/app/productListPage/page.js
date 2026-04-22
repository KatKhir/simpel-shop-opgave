"use client";
import ProductList from "@/components/ProductList";
import BasketList from "@/components/BasketList";
import Header from "@/components/Header";
import { FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Home() {
  const [openBasket, setOpenBasket] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex justify-center mb-4">
        <FaShoppingCart className="w-10 h-10 [@media(min-width:1145px)]:hidden cursor-pointer" onClick={() => setOpenBasket(true)} />
      </div>
      <div className="flex items-start">
        <ProductList />
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
}
