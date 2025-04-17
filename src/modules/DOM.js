// DOM.js
// Handles DOM manipulation

import {myProjects} from "./project";
import {addProjectToArray, deleteProjectFromArray} from "./projectController";
import {displayProjectAside} from "./render";

// ---------------------------- Project Modal Section ------------------------------
// Collect Project DOM section
const projectAddBtn = document.querySelector(".projectAddBtn");
const projectAddModal = document.querySelector(".projectFormSection");
const cancelNewProjectBtn = document.querySelector(".projectCancelBtn");
const projectSubmitBtn = document.querySelector(".projectSubmit");
const projectTitleInput = document.querySelector(".projectTitleInput");
const projectList = document.querySelector(".projectList");

const contentTitle = document.querySelector(".contentTitle");
const contentTaskContainer = document.querySelector(".taskItemContainer");

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
    displayProjectTitle(event);
    displayProjectTasks(event);
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

// Function to display project title in content section
function displayProjectTitle(event) {
    console.log("-----displayProjectTitle function called-----");
    const projectIndex = getProjectIndex(event);
    // get project title from myProjects array
    const projectTitle = myProjects[projectIndex].projectTitle;
    // contentTitle inner html to change to project title
    contentTitle.innerHTML = projectTitle;
};

// Function to display project task array
function displayProjectTasks(event) {
    console.log("-----displayProjectTasks function called-----");
    const projectIndex = getProjectIndex(event);
    // get project task from myProjects array
    const projectTasks = myProjects[projectIndex].tasks;
    // contentTaskContainer inner html to change to project tasks

    // clear previous tasks
    contentTaskContainer.innerHTML = "";

    // check if there are tasks
    if (projectTasks.length === 0) {
        contentTaskContainer.innerHTML = "<p>No tasks available</p>";
        return;
    };

    // loop to display each task
    projectTasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem");
        taskItem.textContent = `${index + 1}. ${task}`;
        contentTaskContainer.appendChild(taskItem);
    });

    console.log("Project tasks displayed: ", projectTasks);



}

export {openProjectModal, closeProjectModal, submitProjectForm, deleteProjectFromAside, projectListClickHandler};