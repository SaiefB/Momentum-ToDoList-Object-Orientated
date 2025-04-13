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
const projectTitleInput = document.querySelector(".projectTitleInput")
const projectList = document.querySelector(".projectList");

// Function to open project modal
function openProjectModal() {
    projectAddBtn.onclick = function () {
        console.log("-----openProjectModal function initiated-----");
        
    }
}