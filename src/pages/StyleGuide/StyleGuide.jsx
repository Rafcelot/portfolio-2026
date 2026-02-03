import "@/pages/StyleGuide/style-guide.scss";

import ColorCard from "@/components/cards/ColorCard/ColorCard.jsx";
import { colorCardsData } from "./data/colorCardsData";


function StyleGuide() {
  return (
    <main className="grid">
      <div className="page__content" >

        <div className="style-guide">
          <h1>Colors</h1>
          

          <div className="cards-grid">
            {colorCardsData.map(( item, index ) => (
              <ColorCard 
                key={index} 
                variant="interface"
                title={item.title}
                description={item.description}
                colors={item.colors}
              />
            ))}             
          </div>


          
        </div>
        



      </div>
    </main>
    

  );
  

}

export default StyleGuide;