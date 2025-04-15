//index.js

import "./styles.css";


import {openProjectModal, closeProjectModal, submitProject, clearProjectForm, deleteProject, getProjectIndex} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    openProjectModal();
    closeProjectModal();
    submitProject();
    deleteProject();
    getProjectIndex();
});