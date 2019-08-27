import React, { Component } from "react";
import tasksStore from "../Stores/TasksStore";
import Datetime from "react-datetime";
import "../DatetimePicker.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import Select from "react-select";

// TODO: Update the datetime picker to something more beautiful.

class CreateTaskForm extends Component {
  state = {
    taskText: "",
    taskDetails: "",
    due: "",
    labels: [],
    modal: false
  };
  addTask() {
    if (this.state.taskText) {
      tasksStore.addTask(
        this.state.taskText,
        this.state.taskDetails,
        this.state.due,
        this.state.labels
      );
      this.setState({ taskText: "", taskDetails: "", due: "", labels: [] });
      this.toggleModal();
    }
  }
  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }
  cancelTask() {
    this.setState({ taskText: "", taskDetails: "", due: "", labels: [] });
    this.toggleModal();
  }
  labelSelect(value, action) {
    this.setState({ labels: value });
  }

  render() {
    let options = tasksStore.labelOptions.map(label => {
      return { value: label, label: label };
    });
    return (
      <div>
        <MDBBtn outline color="primary" onClick={this.toggleModal.bind(this)}>
          New Task
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggleModal.bind(this)}
          size="sm"
        >
          <MDBModalHeader>Add A New Task</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              type="text"
              label="Task"
              onKeyPress={e => {
                if (e.charCode === 13) {
                  this.addTask();
                }
              }}
              onChange={e => this.setState({ taskText: e.target.value })}
              value={this.state.taskText}
              placeholder="Task"
            />
            <MDBInput
              type="textarea"
              label="Details (Optional)"
              onKeyPress={e => {
                if (e.charCode === 13) {
                  this.addTask();
                }
              }}
              onChange={e => this.setState({ taskDetails: e.target.value })}
              placeholder="Optional details"
              value={this.state.taskDetails}
            />
            <Select
              options={options}
              isMulti
              value={this.state.labels}
              onChange={this.labelSelect.bind(this)}
            />
            <Datetime
              defaultValue="Optional Due Date"
              value={this.state.due}
              onChange={momentObj => {
                this.setState({ due: momentObj });
              }}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="secondary"
              size="sm"
              onClick={this.cancelTask.bind(this)}
            >
              Cancel
            </MDBBtn>
            <MDBBtn color="primary" size="sm" onClick={this.addTask.bind(this)}>
              Add Task
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default CreateTaskForm;
