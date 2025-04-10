//logic.js

// Task Section
// Task Class Constructor
class Task {
    constructor(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
        console.log("-----Task Constructor Initiated")
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskDueDate = taskDueDate;
        this.taskPriority = taskPriority;
        this.taskProject = taskProject;
    }
}

// Form Validation - checks if the form is filled out

// Project Section
//Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project Constructor Initiated-----");
        this.tasks = [];
        console.log(`Project Title: ${this.projectTitle}`);
        console.log(`Project Tasks: ${this.tasks}`);
    }
}