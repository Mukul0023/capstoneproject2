import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    // 👉 Order placed
    navigate("/success");
  };

  return (
    <div className="container">
      <h2>🧾 Checkout</h2>

      {/* ORDER SUMMARY */}
      <div className="cart-card">
        <div className="cart-info">
          <h3>Order Summary</h3>
          <p>Total Items: {cart.length}</p>
          <h3>Total: ₹ {total}</h3>
        </div>
      </div>

      {/* FORM */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button type="submit" className="buy-btn">
          Place Order 🛍️
        </button>
      </form>
    </div>
  );
} 