import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export default function Filters() {
  const { search, setSearch } = useContext(PropertyContext);

  return (
    <input
      className="search"
      placeholder="Search by location..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
} 