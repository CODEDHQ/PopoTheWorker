import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import toDoStore from "../Stores/ToDoStore";
import { observer } from "mobx-react";

class ToDoList extends Component {
  render() {
    const list = toDoStore.toDoItems.map(item => <ToDoItem item={item} />);
    return (
      <div>
        <h3>Today</h3>
        <div className="list-group">{list}</div>
      </div>
    );
  }
}

export default observer(ToDoList);
