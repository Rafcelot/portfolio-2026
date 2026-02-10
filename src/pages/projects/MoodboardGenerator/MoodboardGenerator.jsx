import "@/pages/projects/MoodboardGenerator/moodboard-generator.scss";

import UxDecisionCard from "@/components/cards/UxDecisionCard/UxDecisionCard.jsx";
import { uxDecisionsData } from "./data/uiDecisionsData";


import userFlowImg from "@/assets/images/projects/moodboard-generator/user-flow.png";
import finalUiImg from "@/assets/images/projects/moodboard-generator/final-ui.png";
import initialflow from "@/assets/images/projects/moodboard-generator/initial-flow.png";


function MoodboardGenerator() {
  return (
    <main className="grid">
      <div className="page__content">
        <div className="moodboard-layout">

          <h1>UX Case Study</h1>

          <section className="initial-concept">
            <div className="header">
              <h2>Initial concept</h2>
              <p className="body-l--emphasis-high">The initial concept for the Moodboard Generator was a step-based selection flow where users would choose from predefined options to generate a moodboard. The flow included explicit confirmation steps and a summary embedded within the selection process.</p>
            </div>
            <div className="diagram-surface">
              <img
                className="diagram-image"
                src={initialflow}
                alt="initial flow"
              />
            </div>
          </section>

          <section className="usability-insights">
            <div className="header">
              <h2>Iteration & usability insights</h2>
              <p className="body-l--emphasis-high">
                During the first iteration of the Moodboard tool, several usability frictions were identified through self-testing and mobile-first evaluation.
              </p>
            </div>
            <div className="content">
              <div className="content__items">
                <p className="font-bold font-display">Gesture conflict on mobile</p>
                <p>
                  Vertical scrolling within selection areas caused accidental page refresh on mobile devices, introducing friction and risking progress loss during the selection process.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Forced confirmation steps</p>
                <p>
                  Requiring users to select an option to enable the “Next” button added unnecessary cognitive load and slowed down the overall flow.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Summary embedded in the selection flow</p>
                <p>
                  Placing the summary as part of the selection steps blurred the mental model between making choices and reviewing decisions.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Inconsistent step layouts</p>
                <p>
                  Different visual layouts across selection steps increased decision effort and reduced pattern recognition throughout the experience.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Limited overview in the summary</p>
                <p>
                  The summary view required vertical scrolling to access all selected options, reducing clarity and immediate control.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Unclear back navigation</p>
                <p>
                  The back arrow icon was not visually integrated into the main navigation, causing users to actively search for a way to return to previous steps.
                </p>
              </div>
            </div>

            <p className="body-l--emphasis-high">These insights informed a set of key UX decisions that shaped the final experience.</p>  
          </section>




          <section className="ux-decisions">
            <div className="header">
              <h2>Design principles & UX decisions</h2>
              <p className="body-l--emphasis-high">Based on the identified usability issues, the following design principles and UX decisions guided the evolution of the experience.</p>
            </div>
           
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

          <section className="user-flow">
            <div className="header">
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

          <section className="final-ui">
            <div className="header">
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

          <section className="key-learning">
            <div className="header">
              <h2>Key Learning</h2>
              <p className="body-l--emphasis-high">The key learnings below capture the main UX insights gained from testing, iteration, and design refinement.</p>
            </div>
            <div className="content">
              <div className="content__items">
                <p className="font-bold font-display">Removing friction can be more effective than adding guidance</p>
                <p>Eliminating the “Next” button and advancing users through direct selection proved to be more intuitive than explicit confirmation steps.</p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Consistency across steps reduces cognitive load</p>
                <p>Reusing the same interaction patterns (cards, sliders, layouts) helped users build confidence and move faster through decisions.</p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Mobile-first testing reveals critical usability issues early</p>
                <p>Gesture conflicts and navigation friction were only evident when testing the flow on mobile devices.</p>
              </div>
                <div className="content__items">
                <p className="font-bold font-display">Separating decision-making from review improves clarity</p>
                <p>Isolating the summary step reinforced a clear mental model between choosing and evaluating, improving user control.</p>
              </div>
                <div className="content__items">
                <p className="font-bold font-display">Limited overview in the summary</p>
                <p>The summary view required vertical scrolling to access all selected options, reducing clarity and immediate control.</p>
              </div>
  
            </div>
          </section>



       
       
        </div>
      </div>
    
    </main>
  );
}


export default MoodboardGenerator;


