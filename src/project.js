function renderProject(project) {
  const main = document.querySelector('#mainContainer');
  clearMainContainer();

  const content = document.createElement('div');
  content.classList.add('mainContent');

  const contentHTML = `
    <!-- Breadcrumb -->
    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#!" class="breadcrumb">home</a>
          <a href="#!" class="secondary-content tooltipped" data-position="left" data-tooltip="Delete this project"><i class="material-icons">delete</i></a>
          <a href="#!" class="breadcrumb">#${ project.name }</a>
        </div>
      </div>
    </nav>

    <!-- Checkboxes -->
    <blockquote>
      ${ project.description }
    </blockquote>

    <ul class="collapsible">
    </ul>

    <div class="center-align">
      <a class="waves-effect waves-light btn-large red accent-2 modal-trigger" href="#modal2"><i class="material-icons left">add</i>Add Task</a>
    </div>


    
  `;

  content.insertAdjacentHTML("beforeend", contentHTML);
  main.appendChild(content);


  project.getAllTasks().forEach( task => {
    renderTask(task);
  });
  
}

function clearMainContainer() {
  const main = document.querySelector('#mainContainer');
  const content = document.querySelector('.mainContent');

  if(content) { main.removeChild(content) }
}

function renderTask(task){
    const taskList = document.querySelector('.mainContent ul.collapsible');

    let isTaskDone = task.done ? 'checked="checked"' : '';

    // If task priority is not set, don't add a badge. If it is, decide what color and what text.
    let badge;
    switch (task.prio) {
      case 'Urgent':
        badge = `<span class="new badge red" data-badge-caption="urgent"></span>`;
        break;
      case 'High Priority':
        badge = `<span class="new badge orange darken-2" data-badge-caption="high prio"></span>`;
        break;
      case 'Medium Priority':
        badge = `<span class="new badge amber" data-badge-caption="medium prio"></span>`;
        break;
      case 'Low Priority':
        badge = `<span class="new badge lime darken-2" data-badge-caption="low prio"></span>`;
        break;
        
      default:
        badge = ``;  
    }

    let taskHTML = `
      <li>
        <div class="collapsible-header">
          <label>
            <input type="checkbox" ${ isTaskDone }/>
            <span>${ task.name }</span>
          </label>
          ${ badge }
        </div>
        <div class="collapsible-body">
          <div class="my-body-container">
            <div class="body-content">
              <span><i class="material-icons">info</i>${ task.description }</span>
              <span name="due-date"><i class="material-icons">date_range</i> ${ task.dueDate }</span>
            </div>

            <div class="icons">
              <a href="#!" class="secondary-content">
                <i class="material-icons">delete</i>
              </a>
              <a href="#!" class="secondary-content">
                <i class="material-icons">edit</i>
              </a>
            </div>
          </div>
        </div>
      </li>
    `;


    taskList.insertAdjacentHTML("beforeend", taskHTML);
}


export { renderProject, renderTask }