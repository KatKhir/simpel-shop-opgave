import Image from "next/image";
import ProductList from "@/components/ProductList";
import BasketList from "@/components/BasketList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <ProductList />
        <BasketList />
      </div>
    </div>
  );
}
