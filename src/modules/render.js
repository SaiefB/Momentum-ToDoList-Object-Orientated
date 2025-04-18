// render.js
// Handles rendering tasks/projects to the UI

import { myProjects } from "./project";

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
        <button class="contentButton" data-index="${index}">
            <div class="contentButtonLeftDiv">
                <i class="fa-regular fa-circle"></i>
                <p>${task.taskTitle}</p>
                <p>${task.taskDescription}</p>
                <p>${task.priority}</p>
            </div>
            <div class="contentButtonRightDiv">
                <p>${task.dueDate}</p>
                <p class="delete">
                    <i class="fa-solid fa-trash" data-index="${index}"></i>
                </p>
            </div>
        </button>
        `;
        contentTaskContainer.innerHTML += taskEntry;
        console.log("taskEntry added to taskItemContainer");
    });

    console.log("Project tasks displayed");
};




export {updateProjectDropdown, displayProjectAside, displayProjectTitle, displayProjectTasks};