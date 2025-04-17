//index.js
// Entry point for the application

import "./styles.css";

import {openProjectModal, closeProjectModal, submitProjectForm, deleteProjectFromAside, projectListClickHandler} from "./modules/DOM";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
    openProjectModal();
    closeProjectModal();
    submitProjectForm();
    deleteProjectFromAside();
    projectListClickHandler();
});
