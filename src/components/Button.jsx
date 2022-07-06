import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button {...this.props} type="button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
