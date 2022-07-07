import { Component } from "react";

class TextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.children}</label>
        <textarea
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default TextArea;
