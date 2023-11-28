import HoneyItem from "../Items/HoneyItem";

export default function HoneySection() {
  return (
    <section className="section honey-section">
      <h2 className="heading-secondary">Honey</h2>
      <div className="honey-grid">
        <HoneyItem />
      </div>
    </section>
  );
}
