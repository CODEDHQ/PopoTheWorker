import { decorate, observable } from "mobx";

class ToDoStore {
  toDoItems = [
    { task: "Default task", details: "lorem ipsum", id: 83756384763845763587 }
  ];
  doneItems = [];
  idCounter = 0;
  addTask = (taskText, taskDetails) => {
    this.toDoItems.push({
      task: taskText,
      details: taskDetails,
      id: this.idCounter
    });
    this.idCounter++;
  };
  doneTask = taskText => {
    this.toDoItems.find(item => item === taskText);
  };
}

decorate(ToDoStore, {
  toDoItems: observable
});

const toDoStore = new ToDoStore();

export default toDoStore;
