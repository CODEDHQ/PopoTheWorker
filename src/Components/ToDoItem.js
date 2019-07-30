import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ToDoItem extends Component {
  render() {
    return (
      <div class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{this.props.item.task}</h5>
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
        <p class="mb-1">{this.props.item.details}</p>
      </div>
    );
  }
}

export default ToDoItem;
