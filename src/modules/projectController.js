// projectController.js
// This module handles project-related operations
// including creating, updating, and deleting projects.

import { myProjects, Project } from "./project";

// Function to add a project to myProjects array
function addProjectToArray(projectTitle) {
    console.log("-----addProject function initiated-----");
    const newProject = new Project(projectTitle);
    console.log("newProject created: ", newProject);
    myProjects.push(newProject);
    console.log("newProject added to myProjects array, myProjects array: ", myProjects);
};

// Function to delete a project from myProjects array
function deleteProjectFromArray(projectIndex) {
    console.log("-----removeFromProjectArray function called-----");
    console.log("current myProjects array: ", myProjects);
    console.log("projectIndex: ", projectIndex);
    myProjects.splice(projectIndex, 1);  // remove project from myProjects array
    console.log("project removed from myProjects array: ", myProjects);
}

export {addProjectToArray, deleteProjectFromArray};