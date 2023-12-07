import HoneyItem from "../Items/HoneyItem";

export default function HoneySection({ honeysData }) {
  return (
    <section id="honey-section" className="section honey-section">
      <h2 className="heading-secondary">Honey</h2>
      <div className="honey-grid">
        <HoneyItem honeysData={honeysData} />
      </div>
    </section>
  );
}
