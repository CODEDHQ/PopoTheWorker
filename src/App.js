import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import toDoStore from "./Stores/ToDoStore";

class App extends Component {
  state = {
    taskText: "",
    taskDetails: ""
  };
  triggerAddTask() {
    if (this.state.taskText) {
      toDoStore.addTask(this.state.taskText, this.state.taskDetails);
      this.setState({ taskText: "", taskDetails: "" });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onKeyPress={e => {
              if (e.charCode === 13) {
                this.triggerAddTask();
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
                this.triggerAddTask();
              }
            }}
            onChange={e => this.setState({ taskDetails: e.target.value })}
            placeholder="Optional details"
          >
            {this.state.taskDetails}
          </textarea>
          <button
            className="btn btn-primary"
            onClick={this.triggerAddTask.bind(this)}
          >
            Add Task
          </button>
        </div>
        <TodayList taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
