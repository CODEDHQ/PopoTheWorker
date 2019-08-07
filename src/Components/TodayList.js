import React, { Component } from "react";
import Task from "./Task";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";

class ToDoList extends Component {
  render() {
    const list = tasksStore.todayTasks.map(item => (
      <Task key={item.id} item={item} />
    ));
    return (
      <div>
        <h3>Today</h3>
        <div className="list-group">{list}</div>
      </div>
    );
  }
}

export default observer(ToDoList);
