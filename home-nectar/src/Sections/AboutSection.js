import Lottie from "lottie-react";
import animationData from "../assets/bees-animation.json";
import ScrollTrigger from "react-scroll-trigger";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".bees-animation");
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visibility = (windowHeight - rect.top) / windowHeight;

      if (visibility >= 0.6 && !isAnimationVisible) {
        setIsAnimationVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="about-section">
      <ScrollTrigger className="bees-animation">
        {isAnimationVisible && (
          <Lottie
            loop={false}
            animationData={animationData}
            isStopped={!isAnimationVisible}
          />
        )}
      </ScrollTrigger>
      <h2 className="heading-secondary about-heading">About</h2>
      <div className="section about-main-div">
        <div className="about-p-div about-p-div-1">
          <h3 className="heading-terciary heading-terciary-about">
            Who we are
          </h3>
          <p className="about-p">
            Our community of beekeepers and nature advocates is committed to
            sustainable practices and ethical beekeeping. Each jar of{" "}
            <span className="about-p-span">Home Nectar</span> honey tells a
            story of purity and the delicate balance we maintain for the love of
            bees
          </p>
        </div>

        <div className="about-p-div about-p-div-2">
          <h3 className="heading-terciary heading-terciary-about">
            Goals and Objectives
          </h3>
          <ul className="about-ul">
            <li className="about-p">
              Prioritize the health of bee colonies and their habitats through
              responsible hive management
            </li>
            <li className="about-p">
              Adhere to stringent standards to ensure each jar of honey is pure,
              flavorful, and nutritionally rich
            </li>
            <li className="about-p">
              Foster a deeper understanding of bees' importance through
              workshops, educational materials, and partnerships
            </li>
          </ul>
        </div>

        <div className="about-p-div about-p-div-3">
          <h3 className="heading-terciary heading-terciary-about">
            Our Vision
          </h3>
          <p className="about-p">
            We strive to be global advocates for environmental responsibility,
            inspiring a future where sustainable practices are the norm. Through
            honey, we aim to deepen the connection between consumers and the
            natural world, fostering a commitment to a sweeter, more sustainable
            tomorrow
          </p>
        </div>
      </div>
      <div className="about-decorative-div-position-1">
        <img
          className="about-decorative-img"
          src="/img/about-decorative-img-1.webp"
          alt="Honey drip"
        />
      </div>

      <div className="about-decorative-div-position-2">
        <img
          className="about-decorative-img"
          src="/img/about-decorative-img-2.webp"
          alt="Honey drip"
        />
      </div>

      <div className="about-decorative-div-position-3">
        <img
          className="about-decorative-img"
          src="/img/about-decorative-img-3.webp"
          alt="Honey drip"
        />
      </div>

      <div className="about-decorative-div-position-4">
        <img
          className="about-decorative-img"
          src="/img/about-decorative-img-4.webp"
          alt="Honey drip"
        />
      </div>
    </section>
  );
}
