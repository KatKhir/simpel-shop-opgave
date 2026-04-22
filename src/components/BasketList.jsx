"use client";

import { FaShoppingCart } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import useBasket from "@/store/Basket";
import { Fragment } from "react";
import Link from "next/link";

const Basket = () => {
  const cart = useBasket((state) => state.cart);
  const removeFromCart = useBasket((state) => state.removeFromCart);
  const decreaseQuantity = useBasket((state) => state.decreaseQuantity);

  return (
    <div className="w-75 bg-[#FAF6EA] h-fit rounded-2xl mr-10 mb-5 mt-5 pl-4 pb-4">
      <div className="flex justify-center">
        <FaShoppingCart className="w-8 h-8 mt-4 mb-10" />
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Kurven er tom</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex gap-3 mb-3 border-b border-gray-200 last:border-b-0 mr-4 pb-5">
                <div>
                  <img src={item.thumbnail} width={160} alt={item.title} />
                </div>

                <div className="flex flex-col w-full">
                  <div className="mb-3 mr-4">
                    <h3 className="text-sm text-gray-400 font-bold">{item.brand}</h3>
                    <h4 className="text-sm">{item.title}</h4>
                  </div>

                  <div className="flex justify-between items-end">
                    <p className="font-bold text-lg"> {(item.price * item.quantity).toFixed(2)} kr.</p>
                    <IoTrashBinOutline onClick={() => (item.quantity === 1 ? removeFromCart(item.id) : decreaseQuantity(item.id))} className="cursor-pointer mr-4 text-red-800" width={10} height={10} />
                  </div>
                  {item.quantity > 1 && <span className=" text-gray-500 text-[0.9rem] my-2 font-bold w-5 h-5 ">Antal: {item.quantity}</span>}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pb-3">
            <Link href="/Betaling">
              <button className="text-xs font-semibold border border-black py-2 px-4 rounded-xl cursor-pointer transition-all duration-150 hover:scale-105 active:scale-100 ">GÅ TIL BETALING</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
