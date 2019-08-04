import { decorate, observable } from "mobx";
import moment from "moment";
class ToDoStore {
  toDoItems = [
    {
      task: "Default task",
      details: "lorem ipsum",
      moment: moment(),
      id: 83756384763845763587
    }
  ];
  doneItems = [];
  idCounter = 0;
  addTask = (taskText, taskDetails, moment) => {
    this.toDoItems.push({
      task: taskText,
      details: taskDetails,
      moment: moment,
      id: this.idCounter
    });
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
  toDoItems: observable
});

const toDoStore = new ToDoStore();

export default toDoStore;
