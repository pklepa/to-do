import { renderNavbar } from './navbar'
import { renderPageLayout } from './pageLayout';
import { renderSidebar, updateNewProjectModal } from './sidebar';
import { renderMainContainer } from './mainContainer';

// - Initial page rendering
renderNavbar();
renderPageLayout();
renderSidebar();
renderMainContainer();



// - Global variables
const sidebar = document.querySelector('projects');
let projectsArr = [];
let idCounter = 0;



// - Materialize-CSS Components Loaders
document.addEventListener('DOMContentLoaded', function () {
  const collapsibles = document.querySelectorAll('.collapsible');
  const modals = document.querySelectorAll('.modal');
  const tooltipped = document.querySelectorAll('.tooltipped');
  M.Collapsible.init(collapsibles);
  M.Modal.init(modals);
  M.Tooltip.init(tooltipped);
});



// - Event Listeners on elements
document.querySelector('#btn-newProjectConfirm').addEventListener('click', () => {

  // Creates a new project with given name and description
  const name = document.querySelector('input#project_name').value;
  const description = document.querySelector('input#project_description').value;

  let newProject = Project(name, description);
  projectsArr.push(newProject);


  // Renders project page


  // Resets all inputs inside the modal in value and in visual effects
  updateNewProjectModal();

});



// - Factory Functions
const Project = (projName, projDescription) => {
  let name = projName;
  let description = projDescription || 'hello';
  let id = ++idCounter;
  let tasks = {};

  const makeProject = () => {
    
  }

  return { name, description, tasks, id }
}