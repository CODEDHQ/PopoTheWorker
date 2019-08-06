import { decorate, observable } from "mobx";
import moment from "moment";

class ToDoStore {
  toDoItems = [
    {
      task: "Default task",
      details: "lorem ipsum",
      due: moment(),
      id: 83756384763845763587
    }
  ];
  doneItems = [];
  futureItems = [];
  idCounter = 0;
  addTask = (taskText, taskDetails, due) => {
    let future = false;
    let task = {
      task: taskText,
      details: taskDetails,
      due: due,
      id: this.idCounter
    };
    if (due) future = due.isAfter(moment(), "day");
    else future = false;
    if (future) this.futureItems.push(task);
    else this.toDoItems.push(task);
    this.idCounter++;
  };
  doneTask = taskId => {
    let task = this.toDoItems.find(item => item.id === taskId);
    this.doneItems.push(task);
    this.toDoItems = this.toDoItems.filter(item => item.id !== taskId);
  };
  deleteTask = taskId => {
    let task = this.toDoItems.find(item => item.id === taskId);
    this.toDoItems = this.toDoItems.filter(item => item.id !== taskId);
  };
}

decorate(ToDoStore, {
  toDoItems: observable,
  futureItems: observable
});

const toDoStore = new ToDoStore();

export default toDoStore;
