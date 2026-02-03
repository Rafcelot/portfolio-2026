// Styles
import "./color-card.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

// UI
import BrushIcon from "@/components/ui/icons/BrushIcon/BrushIcon.jsx";
import PaintbrushIcon from "@/components/ui/icons/PaintbrushIcon/PaintbrushIcon.jsx"
import TextIcon from "@/components/ui/icons/TextIcon/TextIcon.jsx"





function InterfaceColor({ colors }) {
  const { regular, light, dark } = colors;

  return (
    
    <div
    
      className="color-card__layer-light"
      style={{ backgroundColor: light, color: dark }}
    >
      <div></div>
      <div
        className="color-card__layer-dark"
        style={{ backgroundColor: dark, color: "white" }}
      >
        <div
          className="color-card__layer-regular"
          style={{ backgroundColor: regular, color: "white" }}
        >
          <div className="color-card__regular-texts">
            <p className="color-card__label-dark text-m font-medium font-display">
              Regular
            </p>
            <PaintbrushIcon  />
          </div>
        </div>

        <div className="color-card__dark-texts">
          <p className="color-card__label-regular text-m font-medium font-display">
            Dark
          </p>
          <TextIcon className="check-icon" />
        </div>
      </div>

      <div className="color-card__light-texts">
        <p className="color-card__label-light text-m font-medium font-display">
          Light
        </p>
        <BrushIcon className="check-icon" />
      </div>
    </div>
  )  
}

function Graycolors({ colors }) {
  const { regular, light, dark } = colors;

  return (
    <div className="color-card__gray-colors">


    </div>
  )
}



function ColorCard({ title, description, colors }) {
  const { regular, light, dark } = colors;

  return (
    <div className="color-card">

      {/* Header */}
      <div className="color-card__header">
        <div className="color-card__title">
          <h3 className="text-l">{title}</h3>
          <FontAwesomeIcon icon={faCode} />
        </div>

        <p className="font-display text-m font-medium text-secondary">
          {description}
        </p>
      </div>

      {/* <InterfaceColor 
        colors={colors} 
      /> */}   

      <Graycolors 
        colors={colors} 
      />

      {/* ejemplo borrar */}
      {/* <div className={`card card--${variant}`}>
      {variant === "compact" ? (
        <CompactContent title={title} />
      ) : (
        <DefaultContent title={title} description={description} />
      )}
      </div> */}

      {/* Colors */}
      {/* <div
        className="color-card__layer-light"
        style={{ backgroundColor: light, color: dark }}
      >
        <div
          className="color-card__layer-dark"
          style={{ backgroundColor: dark, color: "white" }}
        >
          <div
            className="color-card__layer-regular"
            style={{ backgroundColor: regular, color: "white" }}
          >
            <div className="color-card__regular-texts">
              <p className="color-card__label-dark text-m font-medium font-display">
                Regular
              </p>
              <PaintbrushIcon  />
            </div>
          </div>

          <div className="color-card__dark-texts">
            <p className="color-card__label-regular text-m font-medium font-display">
              Dark
            </p>
            <TextIcon className="check-icon" />
          </div>
        </div>

        <div className="color-card__light-texts">
          <p className="color-card__label-light text-m font-medium font-display">
            Light
          </p>
          <BrushIcon className="check-icon" />
        </div>
      </div> */}
      
    </div>
  );
}

export default ColorCard;
