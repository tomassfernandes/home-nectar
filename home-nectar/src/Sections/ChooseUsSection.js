import { useState } from "react";

export default function ChooseUsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <section className="section choose-us-section">
      <h2 className="heading-secondary choose-us-h2">Why Choose us?</h2>
      <div className="choose-us-selection-div">
        <div className="choose-us-selection">
          <h3
            className={`choose-us-h3 ${
              currentIndex === 1 ? "choose-us-h3-active" : ""
            }`}
            onClick={() => goToSlide(1)}
          >
            Locally Sourced Goodness
          </h3>
          <div
            onClick={() => goToSlide(1)}
            className={`choose-us-dot ${
              currentIndex === 1 ? "choose-us-dot-active" : ""
            }`}
          ></div>
        </div>

        <div className="choose-us-selection">
          <h3
            className={`choose-us-h3 ${
              currentIndex === 2 ? "choose-us-h3-active" : ""
            }`}
            onClick={() => goToSlide(2)}
          >
            Ethical Beekeeping
          </h3>
          <div
            onClick={() => goToSlide(2)}
            className={`choose-us-dot ${
              currentIndex === 2 ? "choose-us-dot-active" : ""
            }`}
          ></div>
        </div>

        <div className="choose-us-selection">
          <h3
            className={`choose-us-h3 ${
              currentIndex === 3 ? "choose-us-h3-active" : ""
            }`}
            onClick={() => goToSlide(3)}
          >
            Delightful Flavors
          </h3>
          <div
            onClick={() => goToSlide(3)}
            className={`choose-us-dot ${
              currentIndex === 3 ? "choose-us-dot-active" : ""
            }`}
          ></div>
        </div>
      </div>

      <div className="choose-us-grid">
        <div className="choose-us-img-div">
          <img
            className="choose-us-img"
            src={`/img/choose-us-${currentIndex}.webp`}
            alt="Honey jar with flowers around it"
          />
        </div>
        <div className="choose-us-text-div">
          {currentIndex === 1 ? (
            <>
              <p>
                Our honey is a product of meticulous craftsmanship, harvested
                from the thriving bee colonies in our very own apiary. By
                purchasing our honey, you are not only indulging in a pure and
                unadulterated sweet treat but also supporting local beekeeping
                practices.
              </p>
              <p>
                Every jar encapsulates the essence of the diverse flora
                surrounding our farm, providing a taste of the rich biodiversity
                of our region. Choose our honey for an authentic and locally
                sourced delight that reflects the true flavors of nature
              </p>
            </>
          ) : currentIndex === 2 ? (
            <>
              <p>
                We prioritize ethical beekeeping practices, ensuring the
                well-being of our bee colonies and the surrounding ecosystem. By
                choosing our honey, you are supporting a commitment to
                environmental stewardship. Our bees thrive in harmonious
                conditions, fostering a cycle of pollination that contributes to
                the health of local flora
              </p>
              <p>
                Our bees thrive in harmonious conditions, fostering a cycle of
                pollination that contributes to the health of local flora
              </p>
            </>
          ) : currentIndex === 3 ? (
            <>
              <p>
                Immerse yourself in a world of delightful flavors with our
                diverse range of honey varietals. From the robust richness of
                wildflower honey to the nuanced notes of lavender-infused honey,
                each jar offers a unique taste experience.
              </p>
              <p>
                Our beekeepers carefully curate the honey collection to showcase
                the distinct characteristics of various floral sources
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
