import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

class ToDoItem extends Component {
  render() {
    return (
      <div className="list-group-item">
        <div className="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faSquare}
              size="2x"
            />
          </div>
          <div class="flex-grow-1 p-3 text-wrap">
            <h5 className="mb-1">{this.props.item.task}</h5>
            <p className="mb-1">{this.props.item.details}</p>
          </div>
          <div>
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTimes} />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;

/*
<div className="list-group-item">
        <div className="d-flex justify-content-between">
          <div class="w-10 d-flex align-items-center">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faSquare}
              size="2x"
            />
          </div>
          <div class="w-100 d-flex justify-content-start">
            <h5 className="mb-1">{this.props.item.task}</h5>
            <p className="mb-1">{this.props.item.details}</p>
          </div>
          <div class="w-10 d-flex align-items-baseline">
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTimes} />
          </div>
        </div>
      </div>
*/

/*
<div className="container list-group-item">
        <div className="row">
          <div className="col-1 d-flex align-items-center">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faSquare}
              size="2x"
            />
          </div>
          <div className="col-10">
            <h5 className="mb-1">{this.props.item.task}</h5>
            <p className="mb-1">{this.props.item.details}</p>
          </div>
          <div className="col-1">
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTimes} />
          </div>
        </div>
      </div>
*/
