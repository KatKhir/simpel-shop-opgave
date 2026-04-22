import DetailPageClient from "@/components/DetailPageClient";

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

  return <DetailPageClient product={product} relatedProducts={relatedProducts} />;
}
