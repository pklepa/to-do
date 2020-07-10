function renderProject(project) {
  const main = document.querySelector('#mainContainer');

  const content = document.createElement('div');
  content.classList.add('mainContent');

  const contentHTML = `
    <!-- Breadcrumb -->
    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#!" class="breadcrumb">home</a>
          <a href="#!" class="secondary-content tooltipped" data-position="left" data-tooltip="Delete this project"><i class="material-icons">delete</i></a>
          <a href="#!" class="breadcrumb">#example</a>
        </div>
      </div>
    </nav>

    <!-- Checkboxes -->
    <blockquote>
      here's a brief description of what the project is about
    </blockquote>

    <ul class="collapsible">
      <li class="active">
        <div class="collapsible-header">
          <label>
            <input type="checkbox" checked="checked"/>
            <span>urgent task</span>
          </label>
          <span class="new badge red" data-badge-caption="urgent"></span>
        </div>
        <div class="collapsible-body">
          <div class="my-body-container">
            <div class="body-content">
              <span><i class="material-icons">info</i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              <span name="due-date"><i class="material-icons">date_range</i>06 / Jul / 20</span>
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

      <li>
        <div class="collapsible-header">
          <label>
            <input type="checkbox"/>
            <span>high priority task</span>
          </label>
          <span class="new badge orange darken-2" data-badge-caption="high prio"></span>
        </div>
        <div class="collapsible-body">
          <div class="my-body-container">
            <div class="body-content">
              <span><i class="material-icons">info</i>Duis sodales est nec hendrerit ultricies.</span>
              <span name="due-date"><i class="material-icons">date_range</i>25 / Jul / 20</span>
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

      <li>
        <div class="collapsible-header">
          <label>
            <input type="checkbox"/>
            <span>medium priority task</span>
          </label>
          <span class="new badge amber" data-badge-caption="medium prio"></span>
        </div>
        <div class="collapsible-body">
          <div class="my-body-container">
            <div class="body-content">
              <span><i class="material-icons">info</i>Morbi rhoncus erat tellus, ut vehicula erat pretium vel.</span>
              <span name="due-date"><i class="material-icons">date_range</i>04 / Aug / 20</span>
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

      <li>
        <div class="collapsible-header">
          <label>
            <input type="checkbox"/>
            <span>low priority task</span>
          </label>
          <span class="new badge lime darken-2" data-badge-caption="low prio"></span>
        </div>
        <div class="collapsible-body">
          <div class="my-body-container">
            <div class="body-content">
              <span><i class="material-icons">info</i>Vivamus eu ante nec massa dictum blandit id ut mauris.</span>
              <span name="due-date"><i class="material-icons">date_range</i>12 / Dec / 20</span>
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
    </ul>

    <div class="center-align">
      <a class="waves-effect waves-light btn-large red accent-2 modal-trigger" href="#modal2"><i class="material-icons left">add</i>Add Task</a>
    </div>


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
            <select>
              <option value="" disabled selected>Choose your option</option>
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
        <a id="btn-newProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
      </div>
    </div>
  `;

  content.insertAdjacentHTML("beforeend", contentHTML);
  main.appendChild(content);
}


export { renderProject }