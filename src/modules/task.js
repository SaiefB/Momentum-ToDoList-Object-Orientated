// task.js
// Task class or task related functions

// Task Class Constructor
class Task {
    constructor(taskTitle, taskDescription, dueDate, priority, project) {
        console.log("-----Task constructor called-----");
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    };
};

export {Task};