//logic.js

// ---------------------------- Task Section ------------------------------------

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

// ----------------------------- Project Section -------------------------------

// Project Array
console.log("-----myProject array created-----");
const myProjects = [];

//Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project constructor initiated-----");
        this.tasks = [];
        console.log(`Project Title: ${this.projectTitle}`);
        console.log(`Project Tasks: ${this.tasks}`);
    }
}

// Function to add a project to myProjects array
function addProject(projectTitle) {
    console.log("-----addProject function initiated-----");
    const newProject = new Project(projectTitle);
    console.log("newProject created: ", newProject);
    myProjects.push(newProject);
    console.log("newProject added to myProjects array, myProjects array: ", myProjects);
};
