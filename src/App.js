import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";
import toDoStore from "./Stores/ToDoStore";

class App extends Component {
  componentDidMount() {
    toDoStore.retrieveFromLocalStorage();
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
