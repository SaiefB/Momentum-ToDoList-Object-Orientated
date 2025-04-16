//index.js

import "./styles.css";


import {openTaskModal, closeTaskModal, openProjectModal, closeProjectModal, submitProject, clearProjectForm, deleteProject, getProjectIndex} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    openTaskModal();
    closeTaskModal();
    openProjectModal();
    closeProjectModal();
    submitProject();
    deleteProject();
    getProjectIndex();
});