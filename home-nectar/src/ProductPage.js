// ProductPage.js
import { useLocation } from "react-router-dom";
import Header from "./Sections/Header";
import { useState, useEffect } from "react";
import Footer from "./Sections/Footer";
import CartIcon from "./Items/CartIcon";
import CartSection from "./Sections/CartSection";
import { useCart } from "./CartContext";

export default function ProductPage({ honeysData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCartSectionActive, setIsCartSectionActive] = useState(false);

  const { dispatch } = useCart();

  const openCartSection = () => {
    setIsCartSectionActive(true);
  };

  const closeCartSection = () => {
    setIsCartSectionActive(false);
  };

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

  function handleCartItems() {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        img: selectedHoney.img,
        id: selectedHoney.id + Date.now(), // Generate a unique ID using current timestamp
        name: selectedHoney.name,
        price: totalPrice,
        quantity,
      },
    });
  }

  if (!selectedHoney) {
    // Handle case where there is no data (optional)
    return <div>No data found</div>;
  }

  return (
    <>
      <CartSection isActive={isCartSectionActive} onClick={closeCartSection} />
      <Header />
      <h1 className="heading-primary-product-page">
        {selectedHoney.name} Honey
      </h1>
      <div className="section product-section">
        <CartIcon onClick={openCartSection} />
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
                  className="adding-mini-div product-page-quantity-text"
                  onClick={handleRemoveProduct}
                >
                  -
                </span>
                <p className="adding-mini-div product-page-quantity-text">
                  {quantity}
                </p>
                <span
                  className="adding-mini-div product-page-quantity-text"
                  onClick={handleAddProduct}
                >
                  +
                </span>
              </div>
              <p className="product-page-quantity-text">{`${totalPrice.toFixed(
                2
              )}€`}</p>
            </div>
            <div className="product-page-btn-div">
              <button
                className="product-page-btn cart-btn"
                onClick={handleCartItems}
              >
                ADD TO CART
              </button>
              <button className="product-page-btn buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>

        <div className="product-info-main-div">
          <div className="product-info-div">
            <p className="info-title">Flower:</p>
            <p className="info-text">{selectedHoney.name}</p>
          </div>
          <div className="product-info-div">
            <p className="info-title">Weight:</p>
            <p className="info-text">{selectedHoney.amount}</p>
          </div>

          <div className="product-info-div">
            <p className="info-title">Region:</p>
            <p className="info-text">{selectedHoney.region}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
