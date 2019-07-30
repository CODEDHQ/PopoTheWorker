import React, { Component } from "react";
import toDoStore from "../Stores/ToDoStore";

class CreateTaskForm extends Component {
  state = {
    taskText: "",
    taskDetails: "",
    dueDate: ""
  };
  addTask() {
    if (this.state.taskText) {
      toDoStore.addTask(
        this.state.taskText,
        this.state.taskDetails,
        this.state.dueDate
      );
      this.setState({ taskText: "", taskDetails: "", dueDate: "" });
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
          onChange={e => this.setState({ dueDate: e.target.value })}
          value={this.state.dueDate}
          placeholder="Due Date"
        />
        <button className="btn btn-primary" onClick={this.addTask.bind(this)}>
          Add Task
        </button>
      </div>
    );
  }
}

export default CreateTaskForm;
