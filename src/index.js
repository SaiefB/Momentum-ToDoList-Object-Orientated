//index.js

import "./styles.css";


import {openProjectModal, closeProjectModal} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    openProjectModal();
    closeProjectModal();
});