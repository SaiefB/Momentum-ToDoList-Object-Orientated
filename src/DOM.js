// DOM.js

//Import
import {Task, myProjects, addProject, validateProjectForm } from "./logic";

// ---------------------------- Collect DOM Elements --------------------------
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

const contentSection = document.querySelector(".content")
const taskItemContainer = document.querySelector(".taskItemContainer");

// ---------------------------- Project Section ------------------------------

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

// Function to submit project
function submitProject() {
    projectSubmitBtn.onclick = function(event) {
        console.log("-----submitProject function initiated-----");
        console.log("submitProject clicked");
        event.preventDefault();
        const project = projectTitleInput.value;

        if (validateProjectForm(project)) {
            addProject(project);
            clearProjectForm();
            /* displayProjectAside(); */
        };
    };
};

// Function to clear project form
function clearProjectForm() {
    console.log("-----clearProjectForm function initiated-----");
    projectTitleInput.value = "";
    console.log("project form cleared");
};

/* //Function to display projects in the aside
function displayProjectAside() {
    console.log("-----displayProjectAside function initiated-----");
    projectList.innerHTML = "";
    console.log("projectList innerHTML cleared");


} */

export {openProjectModal, closeProjectModal, submitProject, clearProjectForm};