import { useState } from "react";
import { useProducts } from "../../Context/ProductsContext";

export const Products = () => {
  const [sort, setSort] = useState("");
  const { products } = useProducts();

  const sortedProducts = [...(products || [])].sort((a, b) => {
    if (sort === "asc") return a.title.localeCompare(b.title);
    if (sort === "desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-sm text-gray-600 mb-4">
        Du er her: <span className="text-black">Home / Produkter</span>
      </p>

      {/* Titel */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Rundstykker</h1>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="">Sorter</option>
          <option value="asc">Alfabetisk A-Z</option>
          <option value="desc">Alfabetisk Z-A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sortedProducts.slice(0, 4).map((product, index) => (
          <figure key={index} className="flex gap-5">
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-cover rounded-lg shadow md:w-48 md:h-32"
            />

            <figcaption className="flex flex-col justify-between">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-700 text-sm mt-2">
                  {product.teaser}
                </p>

              <div className="flex items-center gap-4 mt-4">
                <button className="bg-[#e3a76f] text-white px-4 py-2 rounded-md hover:bg-[#d89556]">
                  Læs mere
                </button>
                <span className="text-gray-600 flex items-center gap-1">
                  {product.likes}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
