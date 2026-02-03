import "@/pages/projects/MoodboardGenerator/moodboard-generator.scss";

import UxDecisionCard from "@/components/cards/UxDecisionCard/UxDecisionCard.jsx";
import { uxDecisionsData } from "./data/uiDecisionsData";


import userFlowImg from "@/assets/images/projects/moodboard-generator/user-flow.png";
import finalUiImg from "@/assets/images/projects/moodboard-generator/final-ui.png";


function MoodboardGenerator() {
  return (
    <main className="grid">
      <div className="page__content">
        <div className="moodboard-layout">

          <h1>Moodboard Generator</h1>

          <section className="user-flow">
            <div className="user-flow__header">
              <h2>User flow</h2>
              <p className="body-l--emphasis-high">Low-fidelity wireframe focused on interaction and decision-making </p>
            </div>
            <div className="diagram-surface">
              <img
                className="diagram-image"
                src={userFlowImg}
                alt="User flow"
              />
            </div>
          </section>


          <section className="ux-decisions">
            <h2>Key UX Decisions </h2>
            <div className="ux-decisions__list">
              {uxDecisionsData.map((decision, index) => (
                <UxDecisionCard
                  key={ index }
                  index={index + 1}
                  title={decision.title}
                  rationale={decision.rationale}                
                />
              ))}
            </div>
          </section>

          <section className="final-ui">
            <div className="final-ui__header">
              <h2>Final UI</h2>
              <p className="body-l--emphasis-high">Final UI reflecting the defined user flow and interaction decisions. The interface translates the step-based flow, direct selection logic, and progress feedback into a clear and functional experience.</p>  
            </div>
            <div className="diagram-surface">
              <img
                className="diagram-image"
                src={finalUiImg}
                alt="Final UI"
              />
            </div>          
          </section>
       
       
        </div>
      </div>
    
    </main>
  );
}


export default MoodboardGenerator;


