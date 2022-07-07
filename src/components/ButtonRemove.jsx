import { Component } from "react";
import Button from "./Button";

class ButtonRemove extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Button {...this.props}>x</Button>;
  }
}

export default ButtonRemove;
