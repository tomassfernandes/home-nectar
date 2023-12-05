// ProductPage.js
import { useLocation } from "react-router-dom";
import Header from "./Sections/Header";
import { useState } from "react";

export default function ProductPage({ honeysData }) {
  const location = useLocation();
  const productId = Number(location.pathname.split("/")[2]); // Extracting the product id from the URL
  const selectedHoney = honeysData.find((item) => item.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedHoney.price);

  function handleAddProduct() {
    setQuantity(quantity + 1);
    setTotalPrice(+(totalPrice + selectedHoney.price).toFixed(2));
  }

  function handleRemoveProduct() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(+(totalPrice - selectedHoney.price).toFixed(2));
    }
  }

  if (!selectedHoney) {
    // Handle case where there is no data (optional)
    return <div>No data found</div>;
  }

  return (
    <>
      <Header />
      <h1 className="heading-primary-product-page">
        {selectedHoney.name} Honey
      </h1>
      <div className="section">
        <div className="product-page-grid">
          <div className="product-page-img-div">
            <img
              className="product-page-img"
              src={selectedHoney.img}
              alt={`${selectedHoney.name} honey`}
            />
          </div>
          <div className="product-page-text-div">
            <p className="product-page-text">{selectedHoney.text}</p>
            <div className="product-page-quantity-div">
              <p className="product-page-quantity-text">Quantity</p>
              <div className="adding-quantity-div">
                <span
                  className="adding-mini-div product-page-quantity-text remove-product"
                  onClick={handleRemoveProduct}
                >
                  -
                </span>
                <p className="adding-mini-div product-page-quantity-text">
                  {quantity}
                </p>
                <span
                  className="adding-mini-div product-page-quantity-text add-product"
                  onClick={handleAddProduct}
                >
                  +
                </span>
              </div>
              <p className="product-page-quantity-text">{totalPrice}</p>
            </div>
            <div className="product-page-btn-div">
              <button className="product-page-btn cart-btn">ADD TO CART</button>
              <button className="product-page-btn buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
