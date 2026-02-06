import "@/pages/StyleGuide/style-guide.scss";

import ColorCard from "@/components/cards/ColorCard/ColorCard.jsx";



function StyleGuide() {
  return (
    <main className="grid">
      <div className="page__content">
        <section className="style-guide">
          <h1>Colors</h1>

          <ColorCard 
            variant="interface"
          />

          <ColorCard
            variant="gray"
          />
        </section>
      </div>
    </main>
  );
}

export default StyleGuide;
