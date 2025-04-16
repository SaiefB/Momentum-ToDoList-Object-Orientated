//index.js

import "./styles.css";


import {openProjectModal, closeProjectModal, submitProject, clearProjectForm, deleteProject, getProjectIndex, openTaskModal} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    openTaskModal();
    openProjectModal();
    closeProjectModal();
    submitProject();
    deleteProject();
    getProjectIndex();
});