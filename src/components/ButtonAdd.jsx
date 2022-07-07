import { Component } from "react";
import Button from "./Button";

class ButtonAdd extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button {...this.props} className="add-btn">
        +
      </Button>
    );
  }
}

export default ButtonAdd;
