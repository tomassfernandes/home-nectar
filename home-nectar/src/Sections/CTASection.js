import CartIcon from "../Items/CartIcon";
import CartSection from "./CartSection";
import { Link as ScrollLink } from "react-scroll";
import { useRef } from "react";

export default function CTASection({ openCartSection }) {
  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );

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

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <section>
      <CartSection />
      <div className="section cta-content-section">
        <CartIcon onClick={openCartSection} />

        <nav ref={navRef} className="nav">
          <ScrollLink to="about-section" smooth={true} duration={500}>
            <div className="nav-link">About</div>
          </ScrollLink>

          <ScrollLink to="honey-section" smooth={true} duration={500}>
            <div className="nav-link">Honey</div>
          </ScrollLink>

          <ScrollLink to="farm-section" smooth={true} duration={500}>
            <div className="nav-link">Farm</div>
          </ScrollLink>

          <ScrollLink to="footer" smooth={true} duration={500}>
            <div className="nav-link">Contact</div>
          </ScrollLink>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            {closeIcon}
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavBar}>
          {menuIcon}
        </button>

        <div className="cta-grid">
          <div className="cta-text-div">
            <h1 className="heading-primary">
              Get to know us and sweeten your life!
            </h1>
            <p className="cta-p">
              Discover the essence of Home Nectar! Get to know us and sweeten
              your life with our premium honey. Indulge in the pure, unfiltered
              goodness of nature, creating moments of delight with every golden
              drop. Join us on this sweet journey!
            </p>
            <ScrollLink to="about-section" smooth={true} duration={500}>
              <button className="cta-btn">Find More</button>
            </ScrollLink>
          </div>
          <div className="cta-img-div">
            <img
              className="cta-img"
              src="/img/cta-img.webp"
              alt="Honey jar with bees"
            />
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1701100644">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="blue-background-div">
        <div class="custom-shape-divider-top-1701103328">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <div class="custom-shape-divider-bottom-1701102928">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
