import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={this.props.className}>
        {this.props.listItems.map((el) => (
          <li
            role="textbox"
            contentEditable
            suppressContentEditableWarning
            key={uuidv4()}
          >
            {el}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItems;
