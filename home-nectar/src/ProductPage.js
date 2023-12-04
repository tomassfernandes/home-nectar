// ProductPage.js
import { useLocation } from "react-router-dom";
import Header from "./Sections/Header";

export default function ProductPage({ honeysData }) {
  const location = useLocation();
  const productId = Number(location.pathname.split("/")[2]); // Extracting the product id from the URL
  const selectedHoney = honeysData.find((item) => item.id === productId);

  if (!selectedHoney) {
    // Handle case where there is no data (optional)
    return <div>No data found</div>;
  }

  return (
    <div>
      <Header />
      <h1>{selectedHoney.name} Details</h1>
      <div>
        <img src={selectedHoney.img} alt={`${selectedHoney.name} honey`} />
        <p>{selectedHoney.text}</p>
        {/* Display other details as needed */}
      </div>
    </div>
  );
}
