import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import toDoStore from "../Stores/ToDoStore";

class ToDoItem extends Component {
  checkTask() {
    toDoStore.doneTask(this.props.item.id);
  }
  deleteTask() {
    if (window.confirm("Are you sure?"))
      toDoStore.deleteTask(this.props.item.id);
  }
  render() {
    let dueDate;
    if (this.props.item.moment) {
      dueDate = this.props.item.moment.fromNow();
    }
    return (
      <div className="list-group-item">
        <div className="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faSquare}
              size="2x"
              onClick={this.checkTask.bind(this)}
            />
          </div>
          <div class="flex-grow-1 p-3 text-wrap">
            <h5 className="mb-1">{this.props.item.task}</h5>
            <p className="mb-1">{this.props.item.details}</p>
          </div>
          <div>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faTimes}
              onClick={this.deleteTask.bind(this)}
            />
          </div>
        </div>
        <p className="mb-1">{this.props.item.details}</p>
        <small>{dueDate}</small>
      </div>
    );
  }
}

export default ToDoItem;
