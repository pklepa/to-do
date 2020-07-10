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
const sidebar = document.querySelector('projects');
let projectsArr = [];
let idCounter = 0;



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
document.querySelector('#btn-newProjectConfirm').addEventListener('click', () => {

  // Creates a new project with given name and description
  const name = document.querySelector('input#project_name').value;
  const description = document.querySelector('input#project_description').value;

  let newProject = Project(name, description);
  projectsArr.push(newProject);


  // Renders project page

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