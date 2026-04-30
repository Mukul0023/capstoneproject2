import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your order will be delivered soon.</p>

      <Link to="/" className="view-btn">
        Continue Shopping
      </Link>
    </div>
  );
} 