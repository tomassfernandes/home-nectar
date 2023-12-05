export default function CartSection({ honeysCartData }) {
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

  return (
    <div className="cart-section">
      <div className="shopping-cart-close-div">
        <p className="your-shopping-cart-text">Your Shopping Cart</p>
        <span className="cart-close-icon">{closeIcon}</span>
      </div>
      <h2>{honeysCartData.name}</h2>
    </div>
  );
}
