import { ProjectController, Project, Task } from './projectController';
import { renderProject, renderTask } from './project';
import { updateSidebar } from './sidebar';
import { renderHome } from './home';



function loadModals() {
  loadNewProjectModal();
  loadNewTaskModal();
  loadEditTaskModal();
  loadEditProjectModal();
  loadDeleteProjectModal();


  // - Materialize-CSS Components Loaders
  const modals = document.querySelectorAll('.modal');
  const datepickers = document.querySelectorAll('.datepicker');
  const selects = document.querySelectorAll('select');
  
  M.Datepicker.init(datepickers);
  M.FormSelect.init(selects);
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
}

function loadNewProjectModal() {
  const todoApp = document.querySelector('#todoApp');

  const modalHTML = `
      <!-- Modal Structure -->
      <div id="modal1" class="modal modal-fixed-footer" style="max-height: 300px;">
        <div class="modal-content">
          <h4>Create new project</h4>
          <p>Give your project a name and a brief description.</p>
          <div class="row">
            <div class="input-field col s4">
              <input id="project_name" type="text" class="validate">
              <label for="project_name">Project name</label>
            </div>

            <div class="input-field col s8">
              <input id="project_description" type="text" class="validate">
              <label for="project_description">Description</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>
          <a id="btn-newProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
        </div>
      </div>  
  `;

  todoApp.insertAdjacentHTML('beforeend', modalHTML);


  // Event Listener
  document.querySelector('#btn-newProjectConfirm').addEventListener('click', () => {
    // Creates a new project with given name and description
    const name = document.querySelector('input#project_name').value;
    const description = document.querySelector('input#project_description').value;
  
    let newProject = Project(name, description);
    ProjectController.add(newProject);
  
  
    // Renders project page
    renderProject();

    // Updates sidebar
    updateSidebar();
  });
}

function loadEditProjectModal() {
  const todoApp = document.querySelector('#todoApp');

  const modalHTML = `
      <!-- Modal Structure -->
      <div id="modal-editProject" class="modal modal-fixed-footer" style="max-height: 300px;">
        <div class="modal-content">
          <h4>Edit project</h4>
          <p>Give your project a name and a brief description.</p>
          <div class="row">
            <div class="input-field col s4">
              <input id="edit_project_name" type="text" class="validate">
              <label for="edit_project_name">Project name</label>
            </div>

            <div class="input-field col s8">
              <input id="edit_project_description" type="text" class="validate">
              <label for="edit_project_description">Description</label>
            </div>
          </div>

          <p id="edit_project_id" style="display:none"></p>

        </div>
        <div class="modal-footer">
          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>
          <a id="btn-editProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
        </div>
      </div>  
  `;

  todoApp.insertAdjacentHTML('beforeend', modalHTML);


  // Event Listener
  document.querySelector('#btn-editProjectConfirm').addEventListener('click', () => {
    const name = document.querySelector('input#edit_project_name').value;
    const description = document.querySelector('input#edit_project_description').value;
    const id = document.querySelector('p#edit_project_id').textContent;
  
    ProjectController.edit({name, description, id});
  
    // Renders project page
    renderProject();

    // Updates sidebar
    updateSidebar();
  });
}

function loadDeleteProjectModal() {
  const todoApp = document.querySelector('#todoApp');

  const modalHTML = `
      <!-- Modal Structure -->
      <div id="modal-deleteProject" class="modal modal-fixed-footer" style="max-height: 250px;">
        <div class="modal-content">
          <h4>Delete project</h4>
          <p>If you delete this project, every task inside it will be lost as well. Do you wish to continue?</p>

          <p id="delete_project_id" style="display:none"></p>
        </div>
        <div class="modal-footer">
          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>
          <a id="btn-deleteProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
        </div>
      </div>  
  `;

  todoApp.insertAdjacentHTML('beforeend', modalHTML);


  // Event Listener
  document.querySelector('#btn-deleteProjectConfirm').addEventListener('click', () => {
    const id = document.querySelector('p#delete_project_id').textContent;
  
    ProjectController.remove(id);
  
    // Renders home page
    renderHome();

    // Updates sidebar
    updateSidebar();
  });
}

function loadNewTaskModal() {
  const todoApp = document.querySelector('#todoApp');


  const modalHTML = `
    <!-- Modal Structure -->
    <div id="modal2" class="modal modal-fixed-footer" style="max-height: 400px;" >
      <div class="modal-content">
        <h4>New task</h4>
        <div class="row">
          <div class="input-field col s8">
            <i class="material-icons prefix">check_circle</i>
            <input id="task_name" type="text" class="validate">
            <label for="task_name">Task name</label>
          </div>
          
          <div class="input-field col s4">
            <select id="task_priority">
              <option value="" disabled selected>Not set</option>
              <option value="1">Urgent</option>
              <option value="2">High Priority</option>
              <option value="3">Medium Priority</option>
              <option value="4">Low Priority</option>
            </select>
            <label>Priority Level</label>
          </div> 
        </div>

        <div class="row">
          <div class="input-field col s8">
            <i class="material-icons prefix">info</i>
            <input id="task_description" type="text" class="validate">
            <label for="task_description">Description</label>
          </div>   
          
          <div class="input-field col s4">
            <i class="material-icons prefix">date_range</i>
            <input id="task_dueDate" type="text" class="datepicker">
            <label for="task_dueDate">Due Date</label>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>
        <a id="btn-newTaskConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
      </div>
    </div>
  `;

  todoApp.insertAdjacentHTML('beforeend', modalHTML);


  // Event Listener
  document.querySelector('#btn-newTaskConfirm').addEventListener('click', () => {
    // Creates new task in current project
    const name = document.querySelector('input#task_name').value;
    const description = document.querySelector('input#task_description').value;
    const dueDate = document.querySelector('input#task_dueDate').value;
    const prio = document.querySelector('select#task_priority').M_FormSelect.input.value;


    let newTask = Task({name, description, dueDate, prio});
    ProjectController.getCurrent().addTask(newTask);

    // Renders task
    renderTask(newTask);

    // Updates sidebar
    updateSidebar();
  });
}

function loadEditTaskModal() {
  const todoApp = document.querySelector('#todoApp');


  const modalHTML = `
    <!-- Modal Structure -->
    <div id="modal-editTask" class="modal modal-fixed-footer" style="max-height: 400px;" >
      <div class="modal-content">
        <h4>Edit task</h4>
        <div class="row">
          <div class="input-field col s8">
            <i class="material-icons prefix">check_circle</i>
            <input id="edit_task_name" type="text" class="validate">
            <label for="edit_task_name">Task name</label>
          </div>
          
          <div class="input-field col s4">
            <select id="edit_task_priority">
              <option value="" disabled selected>Not set</option>
              <option value="1">Urgent</option>
              <option value="2">High Priority</option>
              <option value="3">Medium Priority</option>
              <option value="4">Low Priority</option>
            </select>
            <label>Priority Level</label>
          </div> 
        </div>

        <div class="row">
          <div class="input-field col s8">
            <i class="material-icons prefix">info</i>
            <input id="edit_task_description" type="text" class="validate">
            <label for="edit_task_description">Description</label>
          </div>   
          
          <div class="input-field col s4">
            <i class="material-icons prefix">date_range</i>
            <input id="edit_task_dueDate" type="text" class="datepicker">
            <label for="edit_task_dueDate">Due Date</label>
          </div>
        </div>

        <p id="edit_task_id" style="display:none"></p>
      </div>

      <div class="modal-footer">
        <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>
        <a id="btn-editTaskConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
      </div>
    </div>
  `;

  todoApp.insertAdjacentHTML('beforeend', modalHTML);


  // Event Listener
  document.querySelector('#btn-editTaskConfirm').addEventListener('click', () => {
    // Creates new task in current project
    const name = document.querySelector('input#edit_task_name').value;
    const description = document.querySelector('input#edit_task_description').value;
    const dueDate = document.querySelector('input#edit_task_dueDate').value;
    const prio = document.querySelector('select#edit_task_priority').M_FormSelect.input.value;
    const id = document.querySelector('p#edit_task_id').textContent;

    ProjectController.getCurrent().editTask({name, description, dueDate, prio, id});

    // Renders project
    renderProject();

    // Updates sidebar
    updateSidebar();
  });
}


export { loadModals }