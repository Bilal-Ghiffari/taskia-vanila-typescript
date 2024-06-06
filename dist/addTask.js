document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskManager = new Task();
    const now = new Date();
    const years = now.getFullYear();
    const mounth = String(now.getMonth() + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputTaskName = document.getElementById("taskName");
        const inputTaskPriority = document.getElementById("taskPriority");
        const taskData = {
            taskName: inputTaskName.value,
            taskPriority: inputTaskPriority.value,
            createdAt: `${years}-${mounth}-${date}`,
        };
        const result = taskManager.saveTasks(taskData);
        if (result.success) {
            alert("berhasil menambahkan task");
        }
        else {
            alert("tidak dapat menambahkan task");
        }
    });
});
//# sourceMappingURL=addTask.js.map