import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import Basket from "@/components/Basket";

export default function Home({ searchParams }) {
  return (
    <main className="flex">
      <div className="w-[70vw] bg-[#FAF6EA]  rounded-2xl p-4 mr-5 mt-5 mb-5 ml-10">
        <ProductImages />
        <ProductInfo />
        <Basket />
      </div>
    </main>
  );
}
