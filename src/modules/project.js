// project.js
// Project class or project-related functions

//All Tasks array held in Inbox
console.log("-----Inbox array initialised-----");
const Inbox = [];

// Project Array
console.log("-----myProject array initialised-----");
const myProjects = [];

// Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project constructor called-----");

        this.tasks = []; // Example tasks
        console.log(`Project Title: ${this.projectTitle}`);
        console.log(`Project Tasks: ${this.tasks}`);
    };
};

export {Inbox, myProjects, Project};