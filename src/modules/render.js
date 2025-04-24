// render.js
// Handles rendering tasks/projects to the UI

import { myProjects } from "./project";
import { checkBoxHandler, currentProjectIndex } from "./DOM";

// ---------------------------- Task Modal Section ------------------------------

// Collect Task Modal DOM Variables
const projectSelectDropdown = document.querySelector("#projectDropDown");

// Function update project dropdown
function updateProjectDropdown() {
    console.log("-----updateProjectDropdown function called-----");

    //clear previous options
    projectSelectDropdown.innerHTML = '<option value="">-- Select a project --</option>';

    myProjects.forEach((project) => {
        const option = document.createElement("option");
        option.value = project.projectTitle;
        option.textContent = project.projectTitle;
        projectSelectDropdown.appendChild(option);
        console.log("project option added to dropdown: ", project.projectTitle);
    });
};


// Collect Project DOM section
const projectList = document.querySelector(".projectList");

const contentTitle = document.querySelector(".contentTitle");
const contentTaskContainer = document.querySelector(".taskItemContainer");

// ---------------------------- Project Aside Section ------------------------------

// Function to display project to aside
function displayProjectAside() {
    console.log("-----displayProjectAside function initiated-----");
    projectList.innerHTML = "";
    console.log("projectList innerHTML cleared");

    myProjects.forEach((project, index) => {
        const projectAsideEntry = `
            <button class="projectBtn projectItem" data-index="${index}">
                <div class="projectItemLeftDiv">
                    <i class="fa-solid fa-box-archive"></i>
                    ${project.projectTitle}
                </div>
                <div class="projectItemRightDiv">
                    <p class="projectDelete">
                        <i class="fa-solid fa-trash" data-index="${index}"></i>
                    </p>
                </div>
            </button>
        `;
        projectList.innerHTML += projectAsideEntry;
        console.log("projectEntry added to projectList");
    });
};

// ---------------------------- Content Section ------------------------------

// Function to display project title in content section
function displayProjectTitle(projectIndex) {
    console.log("-----displayProjectTitle function called-----");
    // get project title from myProjects array
    const projectTitle = myProjects[projectIndex].projectTitle;
    // contentTitle inner html to change to project title
    contentTitle.innerHTML = projectTitle;
};

// Function to display project task array
function displayProjectTasks(tasks) {
    console.log("-----displayProjectTasks function called-----");
    // clear previous tasks
    contentTaskContainer.innerHTML = "";

    // check if there are tasks
    if (tasks.length === 0) {
        contentTaskContainer.innerHTML = "<p>Add a Task</p>";
        return;
    };

    // loop to display each task
    tasks.forEach((task, index) => {
        const taskEntry = `
        <div class="contentButton" data-index="${index}">
            <div class="contentButtonLeftDiv">
                <i class="fa-regular fa-circle" id="checkBox"></i>
                <p>${task.taskTitle}</p>
                <p class="description">${task.taskDescription}</p>
                <p>${task.priority}</p>
            </div>
            <div class="contentButtonRightDiv">
                <p>${task.dueDate}</p>
                <p class="delete">
                    <i class="fa-solid fa-trash" data-index="${index}"></i>
                </p>
            </div>
        </div>
        `;
        contentTaskContainer.innerHTML += taskEntry;
        console.log("taskEntry added to taskItemContainer");
    });

    console.log("Project tasks displayed");
};

// ---------------------------- Content Section - Task Section ------------------------------

// Function to change the checkBox icon
function updateCheckBox(event) {
    console.log("-----updateCheckBox function called-----");
    // get task title
    const taskTitle = event.target.nextElementSibling;
    const taskBackground = event.target.closest(".contentButton");

    if (event.target.classList.contains("fa-solid")) {
        event.target.classList.replace("fa-solid", "fa-regular");
        taskTitle.style.textDecoration = "none";
        taskBackground.style.backgroundColor = "white";

    } else if (event.target.classList.contains("fa-regular")) {
        event.target.classList.replace("fa-regular", "fa-solid");
        taskTitle.style.textDecoration = "line-through";
        taskBackground.style.backgroundColor = "#9A9A9A";
    }
}

// function to update description text
function updateDescText(event) {
    console.log("-----updateDescText function called-----"); 
    // get task description text of click event
    const clickedTaskDescriptionText = event.target.closest(".contentButton").querySelector(".description").textContent;
    console.log("clickedTaskDescriptionText: ", clickedTaskDescriptionText);
    // get project.taskDescription
    const actualTaskDescriptionText = myProjects[currentProjectIndex].tasks[clickedTaskDescriptionText].taskDescription;
    console.log("actualTaskDescriptionText: ", actualTaskDescriptionText); // i dont actually kno wwhats happenig here please fix.

}



export {updateProjectDropdown, displayProjectAside, displayProjectTitle, displayProjectTasks, updateCheckBox, updateDescText};