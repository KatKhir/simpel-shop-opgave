import FavoriteIcon from "./FavoriteIcon";

const ProductList = () => {
  return (
    <div className="flex justify-start ">
      <div className="w-[70vw] bg-[#FAF6EA]  rounded-2xl p-4 mr-5 mt-5 mb-5 ml-10">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 justify-center">
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
          <li className="bg-white  w-fit mb-5 rounded-lg shadow-md">
            <div className="relative">
              <FavoriteIcon />
              <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
            </div>
            <div className="pl-4 py-2 pr-4">
              <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
              <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
              <div className="flex justify-between">
                <p className="text-black font-bold text-xl">00,00 kr.</p>
                <button className="cursor-pointer border border-black px-2 rounded-md">Add +</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
