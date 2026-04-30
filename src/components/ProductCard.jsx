import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext);
  const navigate = useNavigate();

  // BUY NOW FUNCTION
  const handleBuyNow = () => {
    addToCart(product);        
    navigate("/cart");         
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} />

      <h3>{product.title}</h3>
      <p className="price">₹ {product.price}</p>

      {/* 🔥 BUTTONS */}
      <div className="btns">
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button className="buy-btn" onClick={handleBuyNow}>
          Buy Now ⚡
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="view-btn">
       View Details
      </Link>
    </div>
  );
}  