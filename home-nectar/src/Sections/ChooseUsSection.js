export default function ChooseUsSection() {
  return (
    <section className="section choose-us-section">
      <h2 className="heading-secondary choose-us-h2">Why Choose us?</h2>
      <div className="choose-us-selection-div">
        <div className="choose-us-selection">
          <h3 className="choose-us-h3 choose-us-h3-active">
            Locally Sourced Goodness
          </h3>
          <div className="choose-us-dot choose-us-dot-active"></div>
        </div>

        <div className="choose-us-selection">
          <h3 className="choose-us-h3">Ethical Beekeeping</h3>
          <div className="choose-us-dot"></div>
        </div>

        <div className="choose-us-selection">
          <h3 className="choose-us-h3">Delightful Flavors</h3>
          <div className="choose-us-dot choose-us-dot-active"></div>
        </div>
      </div>

      <div className="choose-us-grid">
        <div className="choose-us-img-div">
          <img className="choose-us-img" src="/img/choose-us-1.webp" />
        </div>
        <div className="choose-us-text-div">
          <p>
            Our honey is a product of meticulous craftsmanship, harvested from
            the thriving bee colonies in our very own apiary. By purchasing our
            honey, you are not only indulging in a pure and unadulterated sweet
            treat but also supporting local beekeeping practices.
          </p>
          <p>
            Every jar encapsulates the essence of the diverse flora surrounding
            our farm, providing a taste of the rich biodiversity of our region.
            Choose our honey for an authentic and locally sourced delight that
            reflects the true flavors of nature
          </p>
        </div>
      </div>
    </section>
  );
}
