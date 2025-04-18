// taskController.js
// This module handles task-related operations
// It includes functions to create, update, delete, and retrieve tasks

import { myProjects } from "./project";
import { Task } from "./task";

// add task to project
function addTaskToProject(task, description, dueDate, priority, selectedProjectTitle) {
    console.log("-----addTaskToProject function called-----");
    const newTask = new Task(task, description, dueDate, priority, selectedProjectTitle);
    console.log("newTask created: ", newTask);
    console.log("myProjects array: ", myProjects);
    console.log("Selected project title: ", selectedProjectTitle);

    //Loop through projects in myProjects and find the selected project and get index
    myProjects.forEach((project, index) => {
        console.log("Project title check: ", project.projectTitle);
        console.log("Selected project title check: ", selectedProjectTitle);
        if (project.projectTitle === selectedProjectTitle) {
            console.log("Selected project found: ", project);
            console.log("Adding task to project: ", newTask);
            myProjects[index].tasks.push(newTask);
            console.log("Task added to project: ", myProjects[index]);
            console.log("Updated myProjects array: ", myProjects);
        };
    });
};


// TODO: figure this out
// function to delete task from project
function deleteTaskFromProject(event) {
    console.log("-----deleteTaskFromProject function called-----");
    // get project of the task the user clicked on
    const getProjectIndex = event.target.closest(".contentButton").dataset.index;
    console.log("getProjectIndex: ", getProjectIndex);
    //get task that the user clicked on
    // remove task from project
};



// delete task from project

export {addTaskToProject, deleteTaskFromProject};