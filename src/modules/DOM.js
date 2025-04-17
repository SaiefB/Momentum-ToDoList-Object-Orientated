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

export {openProjectModal, closeProjectModal, submitProjectForm, deleteProjectFromAside};