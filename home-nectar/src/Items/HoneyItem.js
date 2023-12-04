import { Link } from "react-router-dom";

export default function HoneyItem() {
  const honeysData = [
    {
      id: 1,
      img: "/img/honey-jar-1.webp",
      name: "Wildflower",
      flowerImg: "/img/wildflower.png",
      text: "Collected from a variety of blossoms dancing in meadows, this honey captures the essence of diverse wildflowers. Its rich, full-bodied flavor boasts a symphony of floral notes, making each jar a unique and delightful expression of the natural world",
      price: 15.99,
      amount: "100g",
    },

    {
      id: 2,
      img: "/img/honey-jar-2.webp",
      name: "Manuka",
      flowerImg: "/img/manuka-flower.png",
      text: "The nectar of the native Manuka tree gives this honey a distinctive, robust taste with earthy undertones. Known for its potential health benefits, this unique honey is a testament to the bees' craftsmanship and the purity of the environments they inhabit",
      price: 22.95,
      amount: "120g",
    },

    {
      id: 3,
      img: "/img/honey-jar-3.webp",
      name: "Lavender Blossom",
      flowerImg: "/img/lavender-flower.png",
      text: "Light and aromatic, this honey carries the sweet essence of lavender fields, infusing your palate with a gentle, soothing flavor. Perfect for tea, desserts, or simply drizzled over fresh fruits, our Lavender Blossom Honey adds a touch of elegance to your culinary creations",
      price: 18.99,
      amount: "100g",
    },
  ];

  return honeysData.map((item) => (
    <Link key={item.id} to={`/product/${item.id}`} className="honey-div">
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
        <p className="honey-p">{item.text}</p>
      </div>
      <button className="honey-btn">ADD TO CART</button>
      <span className="honey-amount-span">{item.amount}</span>
      <span className="honey-price-span">{`${item.price}€`}</span>
    </Link>
  ));
}
