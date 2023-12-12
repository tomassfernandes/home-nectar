import React from "react";
import ReactDOM from "react-dom/client";

import "./CSS/general.css";
import "./CSS/header.css";
import "./CSS/cta-section.css";
import "./CSS/about-section.css";
import "./CSS/honey-section.css";
import "./CSS/bee-farm-section.css";
import "./CSS/choose-us-section.css";
import "./CSS/footer.css";
import "./CSS/cart-section.css";

import "./CSS/queries/about-section-queries.css";
import "./CSS/queries/cta-section-queries.css";

import "./CSS/product-page.css";

import { CartProvider } from "./CartContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
