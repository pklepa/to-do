function renderPageLayout() {
  const body = document.querySelector('body');

  const pageLayout = document.createElement('div');
  pageLayout.classList.add('row');
  pageLayout.id = 'pageLayout';

  const main = document.createElement('div');
  main.classList.add('col', 's8');
  main.id = 'mainContainer';

  const sidebar = document.createElement('div');
  sidebar.classList.add('col', 's4');
  sidebar.id = 'sideContainer';

  pageLayout.appendChild(sidebar);
  pageLayout.appendChild(main);
  body.appendChild(pageLayout);
  body.insertAdjacentHTML('beforeend', loadNewProjectModal() );
  body.insertAdjacentHTML('beforeend', loadNewTaskModal() );
}

function loadNewProjectModal() {
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

  return modalHTML;
}

function loadNewTaskModal() {
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

  return modalHTML

}

export { renderPageLayout }