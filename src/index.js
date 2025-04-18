//index.js
// Entry point for the application

import "./styles.css";

import {openTaskModal, closeTaskModal, closeTaskModalOnCancel, submitTaskForm, openProjectModal, closeProjectModal, submitProjectForm, deleteProjectFromAside, projectListClickHandler} from "./modules/DOM";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
    openTaskModal();
    closeTaskModal();
    closeTaskModalOnCancel();
    submitTaskForm();

    openProjectModal();
    closeProjectModal();
    submitProjectForm();
    deleteProjectFromAside();
    projectListClickHandler();
});
