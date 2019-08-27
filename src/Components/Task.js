import React, { Component } from "react";
import tasksStore from "../Stores/TasksStore";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBCloseIcon,
  MDBListGroupItem
} from "mdbreact";
class Task extends Component {
  state = {
    modal: false
  };
  checkTask() {
    tasksStore.doneTask(this.props.item.id);
  }
  deleteTask() {
    this.toggleDeleteModal();
    tasksStore.deleteTask(this.props.item.id);
  }
  toggleDeleteModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    let dueDate;
    if (this.props.item.due) {
      dueDate = <small>{this.props.item.due.fromNow()}</small>;
    }
    let taskHead;
    if (this.props.item.labels.length > 0) {
      let labels = this.props.item.labels.map(label => {
        return (
          <span
            className="badge badge-pill badge-primary mr-2"
            key={label.value}
          >
            {label.label}
          </span>
        );
      });
      taskHead = (
        <div>
          <div className="d-flex justify-content-between">
            <div className="flex-row">{labels}</div>
            <MDBCloseIcon
              className="ml-auto"
              onClick={this.toggleDeleteModal.bind(this)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <MDBIcon
                far
                icon="square"
                size="2x"
                onClick={this.checkTask.bind(this)}
              />
            </div>
            <div className="flex-grow-1 p-3 text-wrap">
              <h5 className="mb-1">{this.props.item.task}</h5>
            </div>
          </div>
        </div>
      );
    } else
      taskHead = (
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <MDBIcon
              far
              icon="square"
              size="2x"
              onClick={this.checkTask.bind(this)}
            />
          </div>
          <div className="flex-grow-1 p-3 text-wrap">
            <h5 className="mb-1">{this.props.item.task}</h5>
          </div>
          <div>
            <MDBCloseIcon
              className="ml-auto"
              onClick={this.toggleDeleteModal.bind(this)}
            />
          </div>
        </div>
      );
    return (
      <MDBListGroupItem>
        <MDBModal
          modalStyle="danger"
          className="text-white"
          size="sm"
          position="top"
          isOpen={this.state.modal}
          toggle={this.toggleDeleteModal.bind(this)}
        >
          <MDBModalHeader
            className="text-center"
            titleClass="w-100"
            tag="p"
            toggle={this.toggleDeleteModal.bind(this)}
          >
            Are you sure?
          </MDBModalHeader>
          <MDBModalBody className="text-center">
            <MDBIcon icon="times" size="4x" pulse className="animated tada" />
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="danger" onClick={this.deleteTask.bind(this)}>
              Yes
            </MDBBtn>
            <MDBBtn
              color="danger"
              outline
              onClick={this.toggleDeleteModal.bind(this)}
            >
              No
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {taskHead}
        <p className="mb-1">{this.props.item.details}</p>
        {dueDate}
      </MDBListGroupItem>
    );
  }
}

export default Task;
