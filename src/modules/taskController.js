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





// delete task from project

export {addTaskToProject};