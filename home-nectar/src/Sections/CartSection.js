import { useState } from "react";

export default function CartSection({
  honeysCartData,
  cartItemQuantity,
  cartItemPrice,
  isActive,
  onClick,
  handleAddItem,
  handleRemoveItem,
}) {
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );

  const [deleteItem, setDeleteItem] = useState(false);

  function handleDeleteItem() {
    setDeleteItem(true);
  }

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
        <div
          className={`cart-content-main-div ${deleteItem ? "delete-item" : ""}`}
        >
          <div className="cart-img-div">
            <img
              className="cart-img"
              src={honeysCartData.img}
              alt={`${honeysCartData.name} honey`}
            />
          </div>
          <div className="cart-content-text-main-div">
            <div className="cart-content-div">
              <p className="cart-text">{honeysCartData.name}</p>
              <p className="cart-text">{cartItemPrice}</p>
            </div>
            <div className="cart-content-div">
              <div className="cart-adding-quantity-div">
                <span
                  className="cart-adding-mini-div  cart-add-remove-btn cart-text"
                  onClick={handleRemoveItem}
                >
                  -
                </span>
                <p className="cart-adding-mini-div">
                  <p className="cart-mini-div-item-quantity">
                    {cartItemQuantity}
                  </p>
                </p>
                <span
                  className="cart-adding-mini-div cart-add-remove-btn cart-text"
                  onClick={handleAddItem}
                >
                  +
                </span>
              </div>
              <span
                className="cart-item-delete-icon"
                onClick={handleDeleteItem}
              >
                {closeIcon}
              </span>
            </div>
          </div>
        </div>

        <div className="total-buy-main-div">
          <div className="dotted-div"></div>
          <div className="total-buy-div">
            <div className="total-div">
              <p className="your-shopping-cart-text">Subtotal</p>
              <p className="cart-text">{cartItemPrice}</p>
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
