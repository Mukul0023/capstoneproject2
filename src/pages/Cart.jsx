import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    total
  } = useContext(ProductContext);

  const navigate = useNavigate(); // 🔥 add this

  return (
    <div className="container">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.thumbnail} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>

                {/* 🔥 Quantity */}
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Subtotal: ₹ {item.price * item.qty}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <h2 className="total-box">
            Total: ₹ {total}
          </h2>

          {/*CHECKOUT BUTTON */}
          <div style={{ textAlign: "right", marginTop: "15px" }}>
            <button
              className="buy-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout 🧾
            </button>
          </div>
        </>
      )}
    </div>
  );
} 