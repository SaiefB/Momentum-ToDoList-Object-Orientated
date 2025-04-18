// DOM.js
// Handles DOM manipulation

import {Task} from "./task";
import {addTaskToProject, deleteTaskFromProject} from "./taskController";
import {myProjects} from "./project";
import {addProjectToArray, deleteProjectFromArray} from "./projectController";
import {updateProjectDropdown, displayProjectAside, displayProjectTitle, displayProjectTasks} from "./render";

// ---------------------------- Task Modal Section ------------------------------
// Collect Task DOM section
const addBtn = document.querySelector(".contentAddButton");
const modal = document.querySelector(".formSection");
const overlay =document.querySelector(".overlay");
const closeBtn = document.querySelector(".modalClose");
const modalCancel = document.querySelector(".cancelBtn");
const submitBtn = document.querySelector(".submit");

const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const projectInput = document.getElementById("projectDropDown");

// Function to open task modal
function openTaskModal() {
    addBtn.onclick = function () {
        console.log("-----OpenTaskModal function called-----");
        console.log("addBtn clicked");
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log("modal and overlay displayed");
    };
};

// Function to close task modal
function closeTaskModal() {
    closeBtn.onclick = function () {
        console.log("-----closeTaskModal function called-----");
        console.log("closeBtn clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("modal and overlay hidden");
    };
};

//Function to close task modal on cancel button click
function closeTaskModalOnCancel() {
    modalCancel.onclick = function () {
        event.preventDefault();
        console.log("-----closeTaskModalOnCancel function called-----");
        console.log("modalCancel clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("modal and overlay hidden");
    };
};

// Function to handle project Selection:


// Function to handle task submission button click
function submitTaskForm() {
    submitBtn.onclick = function (event) {
        console.log("-----submitTaskForm function called-----");
        console.log("submitBtn clicked");
        
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("modal and overlay hidden");
        
        const taskTitle = taskInput.value;
        const taskDescription = descriptionInput.value;
        const dueDate = dateInput.value;
        const priority = priorityInput.value;
        const project = projectInput.value;
        console.log("Project selected: ", project);
        event.preventDefault();

        if (validateTaskForm(taskTitle, taskDescription, dueDate, priority, project)) {
            addTaskToProject(taskTitle, taskDescription, dueDate, priority, project);
            clearTaskForm();
            /* displayProjectTitle(project);
            displayProjectTasks(); */
        };
    };
};

// Function to validate task form
function validateTaskForm(taskTitle, taskDescription, dueDate,priority, project) {
    console.log("-----validateTaskForm function called-----");
    if (taskTitle === "" || taskDescription === "" || dueDate === "" || priority === "" || project === "") {
        alert("Please fill in all fields");
        console.log("validateTaskForm check: false");
        return false;
    };
    console.log("validateTaskForm check: true");
    return true;
};

// Function to clear task form
function clearTaskForm() {
    console.log("-----clearTaskForm function called-----");
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    projectInput.value = "";
    projectInput.selectedIndex = 0;
    console.log("task form cleared");
};

// ---------------------------- Content Section ------------------------------

// Collect Content DOM section
const contentTaskContainer = document.querySelector(".taskItemContainer");

// function to handle delete task click
function deleteTaskHandler() {
    contentTaskContainer.addEventListener("click", (event) => {
        console.log("-----deleteTaskHandler function called-----");
        // check if the delete icon is clicked
        if (event.target.classList.contains("fa-trash")) {
            console.log("delete icon clicked");
            deleteTaskFromProject(event);
        }
    });

}


// ---------------------------- Project Modal Section ------------------------------
// Collect Project DOM section
const projectAddBtn = document.querySelector(".projectAddBtn");
const projectAddModal = document.querySelector(".projectFormSection");
const cancelNewProjectBtn = document.querySelector(".projectCancelBtn");
const projectSubmitBtn = document.querySelector(".projectSubmit");
const projectTitleInput = document.querySelector(".projectTitleInput");
const projectList = document.querySelector(".projectList");

// Function to open project modal
function openProjectModal() {
    projectAddBtn.onclick = function () {
        console.log("-----openProjectModal function initiated-----");
        console.log("projectAddBtn clicked");
        projectAddBtn.style.display = "none";
        projectAddModal.style.display = "flex";
        console.log("projectAddBtn hidden");
        console.log("projectAddModal displayed");
    };
};

// Function to close project modal
function closeProjectModal() {
    cancelNewProjectBtn.onclick = function() {
        console.log("-----closeProjectModal function initiated-----");
        console.log("projectCancelBtn clicked");
        projectAddBtn.style.display = "block";
        projectAddModal.style.display = "none";
        console.log("projectAddBtn displayed");
        console.log("projectModal hidden");
    };
};

// Function to handle project submission button click
function submitProjectForm() {
    projectSubmitBtn.onclick = function() {
        console.log("-----submitProjectForm function called-----");
        console.log("projectSubmitBtn clicked");
        event.preventDefault();
        const project = projectTitleInput.value;

        if (validateProjectForm(project)) {
            addProjectToArray(project);
            clearProjectForm();
            displayProjectAside();
            updateProjectDropdown();
        };
    };
};

// Function to validate project form
function validateProjectForm() {
    console.log("-----validateProjectForm function called-----");
    const projectTitle = projectTitleInput.value;
    console.log("projectTitle saved: ", projectTitle);

    if (projectTitle === "") {
        alert("Project Name empty. Please enter a Project Name");
        console.log("validateProjectForm check: false");
        return false;
    };
    console.log("validateProjectForm check: true");
    return true;
};

// Function to clear project form
function clearProjectForm() {
    console.log("-----clearProjectForm function called-----");
    projectTitleInput.value = "";
    console.log("projectTitleInput cleared");
};

// ---------------------------- Project Aside Section ------------------------------

// Function to delete project from Aside
function deleteProjectFromAside() {
    projectList.addEventListener("click", (event) => {
        //check if delete icon is clicked
        if (event.target.classList.contains("fa-trash")) {
            console.log("-----deleteProjectFromAside function called-----");
            console.log("delete icon clicked");
            const projectIndex = event.target.getAttribute("data-index");
            deleteProjectFromArray(projectIndex);
            displayProjectAside(); // update projectList
        };
    });
};

// handler for project list item click
function projectListClickHandler() {
    projectList.addEventListener("click", (event) => {
        console.log("-----projectList click event handler called-----");
        const projectIndex = getProjectIndex(event);
            if (!isNaN(projectIndex)) {
                displayProjectTitle(projectIndex);
                console.log("!!!!!!!!!!: ", myProjects[projectIndex].tasks);
                displayProjectTasks(myProjects[projectIndex].tasks);
            }
    });
};

// Function to extract Project Index and return it
function getProjectIndex(event) {
    console.log("-----getProjectIndex function called-----");
    const projectBtn = event.target.closest(".projectBtn");
    if (!projectBtn) return NaN;

    const projectIndex = parseInt(projectBtn.getAttribute("data-index"), 10);
    console.log("projectIndex: ", projectIndex);
    return projectIndex;
};





export {openTaskModal, closeTaskModal, closeTaskModalOnCancel, submitTaskForm, deleteTaskHandler, openProjectModal, closeProjectModal, submitProjectForm, deleteProjectFromAside, projectListClickHandler};