import Image from "next/image";
import Header from "./Header";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center items-center h-[600px] px-15 relative">
        <div className="relative w-full h-full">
          <Image src="/hero_billede.png" fill alt="Hero" className="object-cover" />

          <div className="absolute text-8xl flex-row p-18 m-0 gap-30 text-white">
            <p>Create your style.</p>
            <p className="ml-40 mt-5"> Live your vibe.</p>
          </div>

          <div className="flex justify-center p-[150px] mt-[250px] ml-[500px]">
            <Link href="/productListPage" className="absolute font-sans bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              See our selected products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
