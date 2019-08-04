import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";

class App extends Component {
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
