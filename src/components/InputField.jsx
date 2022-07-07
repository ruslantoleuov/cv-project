import { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.children}</label>
        <input
          id={this.props.id}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default InputField;
