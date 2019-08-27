import React, { Component } from "react";
import Task from "./Task";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
import { MDBListGroup } from "mdbreact";

class ToDoList extends Component {
  render() {
    const list = tasksStore.todayTasks.map(item => (
      <Task key={item.id} item={item} />
    ));
    return (
      <div>
        <h3>Today</h3>
        <MDBListGroup>{list}</MDBListGroup>
      </div>
    );
  }
}

export default observer(ToDoList);
