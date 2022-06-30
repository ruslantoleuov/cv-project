import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/ListItems.css";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={this.props.className}>
        {this.props.listItems.map((el) => (
          <li key={uuidv4()}>{el}</li>
        ))}
      </ul>
    );
  }
}

export default ListItems;
