import React, { Component } from "react";
import tasksStore from "../Stores/TasksStore";
import Datetime from "react-datetime";
import "../DatetimePicker.css";

class CreateTaskForm extends Component {
  state = {
    taskText: "",
    taskDetails: "",
    due: ""
    label: ""
  };
  addTask() {
    if (this.state.taskText) {
      tasksStore.addTask(
        this.state.taskText,
        this.state.taskDetails,
        this.state.due,
        this.state.label
      );
      this.setState({ taskText: "", taskDetails: "", due: "", label: "" });
    }
  }
  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          onKeyPress={e => {
            if (e.charCode === 13) {
              this.addTask();
            }
          }}
          onChange={e => this.setState({ taskText: e.target.value })}
          value={this.state.taskText}
          placeholder="Task"
        />
        <textarea
          className="form-control"
          onKeyPress={e => {
            if (e.charCode === 13) {
              this.addTask();
            }
          }}
          onChange={e => this.setState({ taskDetails: e.target.value })}
          placeholder="Optional details"
          value={this.state.taskDetails}
        />
        <input
          type="text"
          className="form-control"
          onKeyPress={e => {
            if (e.charCode === 13) {
              this.addTask();
            }
          }}
          onChange={e => this.setState({ label: e.target.value })}
          value={this.state.label}
          placeholder="Optional label"
        />
        <Datetime
          defaultValue="Optional Due Date"
          value={this.state.due}
          onChange={momentObj => {
            this.setState({ due: momentObj });
          }}
        />
        <button className="btn btn-primary" onClick={this.addTask.bind(this)}>
          Add Task
        </button>
      </div>
    );
  }
}

export default CreateTaskForm;
