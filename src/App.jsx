import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react"; 
import { ProductContext } from "./context/ProductContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success"; 


export default function App() {
  const { darkMode } = useContext(ProductContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
           <Route path="/success" element={<Success />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
} 


