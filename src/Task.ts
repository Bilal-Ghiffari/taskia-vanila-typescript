type ParamsTask = {
  id: number;
  isCompleted: boolean;
};

class Task {
  private tasks: any;
  private taskUser: any;
  private newTaskUser: { tasks: object[]; user: string } = {
    tasks: [],
    user: null,
  };
  constructor() {
    this.tasks = this.getTasks() || [];
    // this.getTasksUser();
  }

  public getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  public getTasksUser() {
    return JSON.parse(localStorage.getItem("tasksUser")) || [];
  }

  public saveTasks(taskData: any) {
    const newTasksData = {
      id: Date.now(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTasksData);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  public updateComplateTask(taskId: number) {
    const index = this.tasks.findIndex(
      (task: ParamsTask) => task.id === taskId
    );
    console.log(index);
    console.log(taskId);
    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  public takeTask(taskId: number) {
    const taskItem = this.tasks.find((task) => task.id === taskId);
    const user = localStorage.getItem("usernameLoggedIn");

    if (taskItem) {
      this.newTaskUser.tasks.push(taskItem);
      this.newTaskUser.user = user;
    }
    // this.taskUser.push(this.newTaskUser);
    // console.log(this.newTaskUser);
    localStorage.setItem("tasksUser", JSON.stringify(this.newTaskUser));

    const lengthTask = this.getTasks();
    const lengthMyTask = this.getTasksUser();
    // console.log(lengthTask);
    // console.log(lengthMyTask);
    const texst = lengthTask.splice(this.newTaskUser.tasks.length);
    localStorage.setItem("tasks", JSON.stringify(texst));
    console.log("tasks-2", texst);
    // console.log("tasks-1", this.tasks.push(texst));
  }

  private updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
