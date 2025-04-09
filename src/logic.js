//logic.js

// Project Section
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project Constructor Initiated-----");
        this.tasks = [];
        console.log(`Project Title: ${this.projectTitle}`);
        console.log(`Project Tasks: ${this.tasks}`);
    }
}