import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // static: Directly set the contextType to the button class, not the instance!
  // static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => {
            return value === "english" ? "Submit" : "Voorleggen";
          }}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";

    return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

export default Button;
