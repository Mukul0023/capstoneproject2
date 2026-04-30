import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id == id);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} width="200" />
      <p>₹ {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
} 