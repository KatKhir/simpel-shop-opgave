import BasketList from "@/components/BasketList";
import FavoriteIcon from "@/components/FavoriteIcon";
import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return product;
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

  console.log("ID:", id);
  console.log("Product:", product);

  console.log(product);
  return (
    <main>
      <div className="flex">
        <div className="w-[70vw] bg-[#FAF6EA] rounded-2xl p-4 mr-5 mt-5 mb-5 ml-10">
          <div className="flex flex-col md:flex-row mb-10">
            <img className="rounded-lg bg-white mr-5" src={product.thumbnail} alt={product.title} width={350} height={350} />
            <div>
              <Link className="block my-2" href="/productListPage">
                Tilbage til produkter
              </Link>
              <h3 className="mb-1 text-xl text-gray-400 underline decoration-gray-400 underline-offset-2.5">{product.brand}</h3>
              <h4 className="text-black pb-4">{product.title}</h4>
              <p className="mb-4 max-w-[50ch] text-black pb-4">{product.description}</p>
              <p className="mb-3 text-black font-bold text-xl">{product.price} kr.</p>
              <div className="flex gap-4">
                <button className="border rounded-lg py-2 px-4">Tilføj til kurv</button>
                <FavoriteIcon id={product.id} product={product} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {relatedProducts.map((p) => (
              <div key={p.id} className="bg-white  rounded-2xl p-4">
                <img src={p.thumbnail} alt={p.title} width={150} height={150} />
                <h4 className="text-black">{p.title}</h4>
                <p className="text-black font-bold">{p.price} kr.</p>
              </div>
            ))}
          </div>
        </div>
        <BasketList />
      </div>
    </main>
  );
}
