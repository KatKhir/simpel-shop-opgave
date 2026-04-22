import BasketList from "@/components/BasketList";
import Related from "@/components/Related";
import ProductSingle from "@/components/ProductSingle";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

async function getRelatedProducts(category, currentId) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await res.json();
  return data.products.filter((p) => p.id !== currentId).slice(0, 3);
}

export default async function DetailProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  const relatedProducts = await getRelatedProducts(product.category, Number(id));

  return (
    <main>
      <div className="flex">
        <div className="w-[70vw] bg-[#FAF6EA] rounded-2xl p-4 mr-5 mt-5 mb-5 ml-10">
          <ProductSingle product={product} />
          <Related relatedProducts={relatedProducts} />
        </div>
        <BasketList />
      </div>
    </main>
  );
}
