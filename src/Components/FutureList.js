import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import toDoStore from "../Stores/ToDoStore";
import { observer } from "mobx-react";

class FutureList extends Component {
  render() {
    const list = toDoStore.futureItems.map(item => (
      <ToDoItem key={item.id} item={item} />
    ));
    return (
      <div>
        <h3>Future</h3>
        <div className="list-group">{list}</div>
      </div>
    );
  }
}

export default observer(FutureList);
