import { decorate, observable } from "mobx";
import moment from "moment";

// TODO: Repeated code in doneTask() and deleteTask()
// TODO: Create a method that updates todayTasks and futureTasks lists by getting them from pendingTasks. Function can be used to remove repeated code and organize data structures.

class ToDoStore {
  pendingTasks = [
    {
      task: "Default task",
      details: "lorem ipsum",
      due: moment(),
      labels: [],
      id: 83756384763845763587
    }
  ];
  doneTasks = [];
  todayTasks = [];
  futureTasks = [];
  idCounter = 0;
  labelOptions = ["Personal", "Work"];
  addTask = (taskText, taskDetails, due, labels) => {
    let today = true;
    if (due) today = due.isSameOrBefore(moment(), "day");
    let task = {
      task: taskText,
      details: taskDetails,
      due: due,
      labels: labels,
      id: this.idCounter
    };
    this.pendingTasks.push(task);
    if (!today) this.futureTasks.push(task);
    else this.todayTasks.push(task);
    this.idCounter++;
    this.updateLocalStorage();
  };

  doneTask = taskId => {
    // Find/Get task
    let task = this.pendingTasks.find(item => item.id === taskId);

    // Remove task from pending, today, and future tasks.
    this.pendingTasks = this.pendingTasks.filter(item => item.id !== taskId);
    this.todayTasks = this.todayTasks.filter(item => item.id !== taskId);
    this.futureTasks = this.futureTasks.filter(item => item.id !== taskId);

    // Add task to done tasks.
    this.doneTasks.push(task);

    // Update local storage.
    this.updateLocalStorage();
  };
  deleteTask = taskId => {
    // Remove task from pending, today, and future tasks.
    this.pendingTasks = this.pendingTasks.filter(item => item.id !== taskId);
    this.todayTasks = this.todayTasks.filter(item => item.id !== taskId);
    this.futureTasks = this.futureTasks.filter(item => item.id !== taskId);

    // Update local storage.
    this.updateLocalStorage();
  };
  updateLocalStorage = () => {
    // This next line will stringify the tasks, including the moment objects stored as "due".
    let tasks = JSON.stringify({
      pending: this.pendingTasks,
      today: this.todayTasks,
      future: this.futureTasks,
      done: this.doneTasks,
      idCounter: this.idCounter
    });
    localStorage.setItem("tasks", tasks);
  };
  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      // The next three iterations convert a stringified due date to a moment object.
      tasks.pending.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      tasks.today.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      tasks.future.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      this.pendingTasks = tasks.pending;
      this.todayTasks = tasks.today;
      this.futureTasks = tasks.future;
      this.doneTasks = tasks.done;
      this.idCounter = tasks.idCounter;
    }
  };
}

decorate(ToDoStore, {
  pendingTasks: observable,
  todayTasks: observable,
  futureTasks: observable
});

const toDoStore = new ToDoStore();

export default toDoStore;
