import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
