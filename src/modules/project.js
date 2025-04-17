// project.js
// Project class or project-related functions

// Project Array
console.log("-----myProject array initialised-----");
const myProjects = [];

// Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project constructor called-----");

        this.tasks = [];
        console.log(`Project Title: ${this.projectTitle}`);
        console.log(`Project Tasks: ${this.tasks}`);
    };
};

export {myProjects, Project};