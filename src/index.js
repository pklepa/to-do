import { renderNavbar } from './navbar'
import { renderPageLayout } from './pageLayout';
import { renderSidebar } from './sidebar';
import { renderHome } from './home';
import { renderProject } from './project';

// - Initial page rendering
renderNavbar();
renderPageLayout();
renderSidebar();
// renderHome();
renderProject();



// - Global variables




// - Materialize-CSS Components Loaders
document.addEventListener('DOMContentLoaded', function () {
  const collapsibles = document.querySelectorAll('.collapsible');
  const modals = document.querySelectorAll('.modal');
  const tooltipped = document.querySelectorAll('.tooltipped');
  const datepickers = document.querySelectorAll('.datepicker');
  const selects = document.querySelectorAll('select');

  M.Collapsible.init(collapsibles);
  M.Modal.init(modals, { 
    onCloseEnd: () => {
      // Resets all inputs inside the modal in value and in visual effects
      const inputs = document.querySelectorAll('.modal-content .input-field');

      inputs.forEach(input => {
        for (let i = 0; i < input.children.length; i++) {
          let elem = input.children[i];

          if (elem.tagName == 'INPUT') {
            elem.value = '';
            elem.classList.remove('valid');
          } 
          else if(elem.tagName == 'LABEL') {
            elem.classList.remove('active');
          }
        }

      });
    }
  });
  M.Tooltip.init(tooltipped);
  M.Datepicker.init(datepickers);
  M.FormSelect.init(selects);
});



// - Event Listeners on elements

// New Project Modal
document.querySelector('#btn-newProjectConfirm').addEventListener('click', () => {

  // Creates a new project with given name and description
  const name = document.querySelector('input#project_name').value;
  const description = document.querySelector('input#project_description').value;

  ProjectController.add(Project(name, description));


  // Renders project page
});


// New Task Modal
document.querySelector('#btn-newTaskConfirm').addEventListener('click', () => {

  // Creates new task in current project
  const name = document.querySelector('input#task_name').value;
  const description = document.querySelector('input#task_description').value;
  const dueDate = document.querySelector('input#task_dueDate').value;
  // const prio = document.querySelector('input#task_name').value;

  let newTask = Task({name, description, dueDate});
  ProjectController.getCurrent().addTask(newTask);

  console.log(ProjectController.getAll());
  console.log(ProjectController.getCurrent().getAllTasks());

});



// - Factory Functions
const Project = (projName, projDescription) => {
  let name = projName;
  let description = projDescription;
  let tasks = [];
  let id;

  function addTask(task){ tasks.push(task) }
  function getAllTasks(){ return tasks }

  return { name, description, id, addTask, getAllTasks }
}

const Task = (arg) => {
  let task = {
    name: arg.name,
    description: arg.description,
    dueDate: arg.dueDate,
    prio: arg.prio,
  };

  return { task }
}


const ProjectController = (() => {
  let projectsArr = [];
  let idCounter = 0;
  let currentProject;

  function add(project){
    project.id = ++idCounter;
    projectsArr.push(project);
    
    currentProject = project;
  }

  function getCurrent(){ return currentProject }
  function getAll(){ return projectsArr }

  return { add, getCurrent, getAll }
})();


/*
  Things to think about:

  - Where to handle project deletions?
  - What about task deletions?
  - Should tasks have ids? Where to create them?
  - Should sidebar and main container be rendered together (in project creation)?

*/