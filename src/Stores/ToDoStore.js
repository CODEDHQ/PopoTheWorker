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
    this.updateLocalStorage();
  };
  doneTask = taskId => {
    let task = this.toDoItems.find(item => item.id === taskId);
    if (task) {
      this.toDoItems = this.toDoItems.filter(item => item.id !== taskId);
    } else {
      task = this.futureItems.find(item => item.id === taskId);
      this.futureItems = this.futureItems.filter(item => item.id !== taskId);
    }
    this.doneItems.push(task);
    this.updateLocalStorage();
  };
  deleteTask = taskId => {
    let task = this.toDoItems.find(item => item.id === taskId);
    if (this.toDoItems.includes(task)) {
      this.toDoItems = this.toDoItems.filter(item => item.id !== taskId);
    } else {
      task = this.futureItems.find(item => item.id === taskId);
      if (this.futureItems.includes(task)) {
        this.futureItems = this.futureItems.filter(item => item.id !== taskId);
      }
    }
    this.updateLocalStorage();
  };
  updateLocalStorage = () => {
    // This next line will stringify the tasks, including the moment objects stored as "due".
    let tasks = JSON.stringify({
      today: this.toDoItems,
      future: this.futureItems,
      idCounter: this.idCounter
    });
    localStorage.setItem("tasks", tasks);
  };
  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      // The next two iterations convert a stringified due date to a moment object.
      tasks.today.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      tasks.future.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      this.toDoItems = tasks.today;
      this.futureItems = tasks.future;
      this.idCounter = tasks.idCounter;
    }
  };
}

decorate(ToDoStore, {
  toDoItems: observable,
  futureItems: observable
});

const toDoStore = new ToDoStore();

export default toDoStore;
