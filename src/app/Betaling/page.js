import Header from "@/components/Header";
import Image from "next/image";

const Betaling = () => {
  return (
    <div className="">
      <Header />

      <div className="bg-[#D9D9D9] w-150 h-15 ml-[50px] mt-[60px] flex justify-start items-center p-[45px]">
        <h1 className="text-[20px]">Din indkøbskurv (X antal varer i kurven)</h1>
      </div>

      <div className="flex justify-start p-[75px] py-[30px] gap-5 border-b border-gray-200">
        <div>
          <Image src="/hero_billede.png" width={250} height={400} />
        </div>

        <div className="flex flex-col gap-[30px]">
          <h4 className="text-black opacity-41 underline">MÆRKE</h4>
          <p>Navnet på varen</p>
          <p className="mt-[35px]">00,00 KR</p>
        </div>
      </div>

      <div className="underline">
        <p></p>
      </div>

      <div className="flex justify-start p-[75px] py-[30px] gap-5 border-b border-gray-200">
        <div>
          <Image src="/hero_billede.png" width={250} height={400} />
        </div>

        <div className="flex flex-col gap-[30px]">
          <h4 className="text-black opacity-41 underline">MÆRKE</h4>
          <p>Navnet på varen</p>
          <p className="mt-[35px]">00,00 KR</p>
        </div>
      </div>
    </div>
  );
};

export default Betaling;
