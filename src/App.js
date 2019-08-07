import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";
import tasksStore from "./Stores/TasksStore";

class App extends Component {
  componentDidMount() {
    tasksStore.retrieveFromLocalStorage();
  }
  render() {
    return (
      <div className="container">
        <CreateTaskForm />
        <TodayList />
        <FutureList />
      </div>
    );
  }
}

export default App;
