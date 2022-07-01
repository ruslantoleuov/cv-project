import { Component } from "react";

class ColorButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colorBtnProps } = this.props;

    return (
      <button
        className={colorBtnProps.className}
        title={colorBtnProps.title}
        type={colorBtnProps.type}
      >
        &nbsp;
      </button>
    );
  }
}

export default ColorButton;
