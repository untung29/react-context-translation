import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static: Directly set the contextType to the button class, not the instance!
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
