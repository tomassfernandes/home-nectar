import React from "react";
import { useCart } from "../CartContext";

export default function CartSection({ isActive, onClick }) {
  const { cartState, dispatch } = useCart();
  const { cartItems } = cartState;

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );

  const handleDeleteItem = (itemId) => {
    console.log("Deleting item with ID:", itemId);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: itemId },
    });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div
      className={`cart-section ${
        isActive ? "cart-section-active" : "cart-section-no-active"
      }`}
    >
      <div className="shopping-cart-close-div">
        <p className="your-shopping-cart-text">Your Shopping Cart</p>
        <span className="cart-close-icon" onClick={onClick}>
          {closeIcon}
        </span>
      </div>

      <div className="cart-content-big-div">
        <div className="cart-content-main-div-scroll">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-content-main-div">
              <div className="cart-img-div">
                <img
                  className="cart-img"
                  src={item.img}
                  alt={`${item.name} honey`}
                />
              </div>
              <div className="cart-content-text-main-div">
                <div className="cart-content-div">
                  <p className="cart-text">{item.name}</p>
                  <p className="cart-text">{item.price}</p>
                </div>
                <div className="cart-content-div">
                  <div className="cart-adding-quantity-div">
                    <p className="cart-adding-mini-div">
                      <p className="cart-text">{`Qt: ${item.quantity}`}</p>
                    </p>
                  </div>
                  <span
                    className="cart-item-delete-icon"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    {closeIcon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-buy-main-div">
          <div className="dotted-div"></div>
          <div className="total-buy-div">
            <div className="total-div">
              <p className="your-shopping-cart-text">Subtotal</p>
              <p className="cart-text">{calculateTotalPrice().toFixed(2)}</p>
            </div>
            <div className="buy-div">
              <button className="cart-buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
