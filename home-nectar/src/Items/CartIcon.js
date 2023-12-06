import { useCart } from "../CartContext";

export default function CartIcon({ onClick }) {
  const { cartState } = useCart();
  const { cartItems } = cartState;

  // Calculate the total count of unique items in the cart
  const uniqueItemCount = new Set(cartItems.map((item) => item.id)).size;

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <circle
        cx="176"
        cy="416"
        r="16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <circle
        cx="400"
        cy="416"
        r="16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M48 80h64l48 272h256"
      />
      <path
        d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );

  return (
    <div className="cart-icon-main-div" onClick={onClick}>
      <div className="cart-icon-div">
        <span className="cart-icon">{cartIcon}</span>
        {uniqueItemCount > 0 && (
          <div className="cart-icon-number">{uniqueItemCount}</div>
        )}
      </div>
    </div>
  );
}
