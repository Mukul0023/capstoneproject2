import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products, search, loading, error } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const itemsPerPage = 12;

  // SEARCH
  let filtered = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  //CATEGORY FILTER
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  //  SORT (PRICE)
  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // RESET PAGE
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

  // PAGINATION
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h2>Products</h2>

     {/* FILTER UI */}
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="smartphones">Phones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Perfumes</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid">
        {currentItems.length > 0 ? (
          currentItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <h3>No products found ❌</h3>
        )}
      </div>

      {/* PAGINATION */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          ⬅ Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} / {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
} 
