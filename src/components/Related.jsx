const Related = ({ relatedProducts }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {relatedProducts.map((p) => (
        <div key={p.id} className="bg-white rounded-2xl p-4">
          <img src={p.thumbnail} alt={p.title} width={150} height={150} />
          <h4 className="text-black">{p.title}</h4>
          <p className="text-black font-bold">{p.price} kr.</p>
        </div>
      ))}
    </div>
  );
};

export default Related;
