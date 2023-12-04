import { Link } from "react-router-dom";

export default function HoneyItem({ honeysData }) {
  return honeysData.map((item) => (
    <div className="honey-div">
      <div className="honey-img-div">
        <img className="honey-img" src={item.img} alt={`${item.name} honey`} />
      </div>
      <img
        className="honey-flower-icon"
        src={item.flowerImg}
        alt="Honey flower icon"
      />
      <div className="honey-text-div">
        <h3 className="heading-terciary honey-h3">{item.name}</h3>
      </div>
      <Link key={item.id} to={{ pathname: `/product/${item.id}` }}>
        <button className="honey-btn">VIEW DETAILS</button>{" "}
      </Link>
      <span className="honey-amount-span">{item.amount}</span>
      <span className="honey-price-span">{`${item.price}€`}</span>
    </div>
  ));
}
