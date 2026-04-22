"use client";
import Header from "@/components/Header";
import { IoTrashBinOutline } from "react-icons/io5";
import useBasket from "@/store/Basket";

const Betaling = () => {
  const cart = useBasket((state) => state.cart);
  const removeFromCart = useBasket((state) => state.removeFromCart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header />

      <div className="bg-[#D9D9D9] w-150 h-15 ml-[50px] mt-[60px] flex justify-start items-center p-[45px]">
        <h1 className="text-[20px]">Din indkøbskurv ({cart.length} varer i kurven)</h1>
      </div>

      {cart.length === 0 ? (
        <p className="ml-[50px] mt-10 text-gray-400">Kurven er tom</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-start p-[75px] py-[30px] gap-5 border-b border-gray-200">
              <div>
                <img src={item.thumbnail} width={250} height={400} alt={item.title} />
              </div>

              <div className="flex flex-col gap-[30px]">
                <h4 className="text-black opacity-41 underline">{item.brand}</h4>
                <p>{item.title}</p>
                <p className="mt-[35px] font-bold">{item.price} KR</p>
                <IoTrashBinOutline onClick={() => removeFromCart(item.id)} className="cursor-pointer text-red-800 w-6 h-6" />
              </div>
            </div>
          ))}

          <div className="ml-[75px] mt-6 mb-10">
            <p className="text-xl font-bold">Total: {total.toFixed(2)} KR</p>
            <button className="mt-4 border border-black py-2 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-150">GENNEMFØR KØB</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Betaling;
