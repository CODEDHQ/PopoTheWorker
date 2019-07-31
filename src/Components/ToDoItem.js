import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ToDoItem extends Component {
  render() {
    return (
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.item.task}</h5>
          <small>
            <FontAwesomeIcon
              onClick={() => {
                alert("muwahahahahaha");
              }}
              style={{ cursor: "pointer" }}
              icon={faTimes}
            />
          </small>
        </div>
        <p className="mb-1">{this.props.item.details}</p>
      </div>
    );
  }
}

export default ToDoItem;
