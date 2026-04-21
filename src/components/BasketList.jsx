"use client";

import { FaShoppingCart } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import useBasket from "@/store/Basket";
import { Fragment } from "react";

const Basket = () => {
  const cart = useBasket((state) => state.cart);
  const removeFromCart = useBasket((state) => state.removeFromCart);

  return (
    <div className="w-[30vw] bg-[#FAF6EA] h-fit rounded-2xl mr-10 mb-5 mt-5 pl-4 pb-4">
      <div className="flex justify-center">
        <FaShoppingCart className="w-8 h-8 mt-4 mb-10" />
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Kurven er tom</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={`x${item.id}`} className="flex gap-3 mb-3 border-b border-gray-200 last:border-b-0 mr-4 pb-5">
                <div>
                  <img src={item.thumbnail} width={160} alt={item.title} />
                </div>

                <div className="flex flex-col w-full">
                  <div className="mb-3 mr-4">
                    <h3 className="text-sm text-gray-400 font-bold">{item.brand}</h3>
                    <h4 className="text-sm">{item.title}</h4>
                  </div>

                  <div className="flex justify-between items-end">
                    <p className="font-bold text-lg">{item.price} kr.</p>

                    <IoTrashBinOutline onClick={() => removeFromCart(item.id)} className="cursor-pointer mr-4 text-red-800" width={10} height={10} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Basket;

// import { FaShoppingCart } from "react-icons/fa";
// import { IoTrashBinOutline } from "react-icons/io5";

// const Basket = () => {
//   return (
//     <div className=" w-[30vw] bg-[#FAF6EA] h-fit rounded-2xl mr-10 mb-5 mt-5 pl-4 pb-4 ">
//       <div className="flex justify-center">
//         <FaShoppingCart className="w-8 h-8 mt-4 mb-6" />
//       </div>
//       <ul className="justify-center items-start">
//         <li className="flex gap-3 mb-3">
//           <img src="/farver.webp" alt="Billede af faver" width={70} height={80} />
//           <div className="flex flex-col justify-between w-full">
//             <div>
//               <h3 className="text-sm text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
//               <h4 className="text-sm">NAVN PÅ PRODUKT</h4>
//             </div>
//             <div className="flex justify-between items-end">
//               <p className="font-bold text-lg">00,00 kr.</p>
//               <IoTrashBinOutline className="cursor-pointer w-5 h-auto mr-4" />
//             </div>
//           </div>
//         </li>
//         <hr className="border-0.5 border-gray-300 mb-3 mr-4" />
//         <li className="flex gap-3 mb-3">
//           <img src="/farver.webp" alt="Billede af faver" width={70} height={80} />
//           <div className="flex flex-col justify-between w-full">
//             <div>
//               <h3 className="text-sm text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
//               <h4 className="text-sm">NAVN PÅ PRODUKT</h4>
//             </div>
//             <div className="flex justify-between items-end">
//               <p className="font-bold text-lg">00,00 kr.</p>
//               <IoTrashBinOutline className="cursor-pointer w-5 h-auto mr-4" />
//             </div>
//           </div>
//         </li>
//         <hr className="border-0.5 border-gray-300 mb-3 mr-4" />
//         <li className="flex gap-3 mb-3">
//           <img src="/farver.webp" alt="Billede af faver" width={70} height={80} />
//           <div className="flex flex-col justify-between w-full">
//             <div>
//               <h3 className="text-sm text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
//               <h4 className="text-sm">NAVN PÅ PRODUKT</h4>
//             </div>
//             <div className="flex justify-between items-end">
//               <p className="font-bold text-lg">00,00 kr.</p>
//               <IoTrashBinOutline className="cursor-pointer w-5 h-auto mr-4" />
//             </div>
//           </div>
//         </li>
//         <hr className="border-0.5 border-gray-300 mb-3 mr-4" />
//         <li className="flex gap-3 mb-3">
//           <img src="/farver.webp" alt="Billede af faver" width={70} height={80} />
//           <div className="flex flex-col justify-between w-full">
//             <div>
//               <h3 className="text-sm text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
//               <h4 className="text-sm">NAVN PÅ PRODUKT</h4>
//             </div>
//             <div className="flex justify-between items-end">
//               <p className="font-bold text-lg">00,00 kr.</p>
//               <IoTrashBinOutline className="cursor-pointer w-5 h-auto mr-4" />
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Basket;
