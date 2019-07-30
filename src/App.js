import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CreateTaskForm />
        <TodayList />
      </div>
    );
  }
}

export default App;
