import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="section">
      <div className="logo-div">
        <div className="bee-1-img-div">
          <img className="bee-img" src="/img/bee-1.webp" alt="Bee" />
        </div>

        <Link to={"/"}>
          <img
            className="logo-img"
            src="/img/Home-Nectar-logo.webp"
            alt="Logo"
          />
        </Link>

        <div className="bee-2-img-div">
          <img className="bee-img" src="/img/bee-2.webp" alt="Bee" />
        </div>
      </div>
    </header>
  );
}
