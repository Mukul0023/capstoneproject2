import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <App />
  </ProductProvider>
); 
 