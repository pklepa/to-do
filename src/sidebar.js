import { ProjectController } from "./projectController";
import { renderProject } from "./project";

function updateSidebar() {
  const sidebar = document.querySelector('#sideContainer');
  sidebar.innerHTML = '';

  renderSidebar();
}

function renderSidebar() {
  const sidebar = document.querySelector('#sideContainer');

  const sidebarHTML = `
    <h5 class="title">overview</h5>
  
    <div class="sidebar-projects">
    </div>

    <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">
      <i class="material-icons left">add</i>New project
    </a>
  `;

  sidebar.insertAdjacentHTML("beforeend", sidebarHTML);

  insertProjectsInSideBar();
}


function insertProjectsInSideBar(){
  const sidebarProjects = document.querySelector('.sidebar-projects');

  const projects = ProjectController.getAll();
  projects.forEach(proj => {
    let projectDiv = document.createElement('div');
    projectDiv.classList.add('sidebar-project');
    
    let collection = document.createElement('ul');
    collection.classList.add('collection', 'with-header');
    
    let collectionHeader = document.createElement('li');
    collectionHeader.classList.add('collection-header');

    let header = document.createElement('a');
    header.href = '#';
    header.textContent = '#' + proj.name;
    header.addEventListener('click', () => {
      ProjectController.setCurrent(proj); 
      renderProject();
    });
    collectionHeader.appendChild(header);
    collection.appendChild(collectionHeader);


    // Adds only the first 3 incomplete tasks
    let j = 0;
    const tasks = proj.getAllTasks();
    for (let i = 0; i < tasks.length; i++) {

      let li = document.createElement('li');
      li.classList.add('collection-item');

      if(j == 3){
        let div = document.createElement('div');
        div.classList.add('center-align');

        let viewmore = document.createElement('a');
        viewmore.classList.add('view-more');
        viewmore.href = '#';
        viewmore.textContent = 'view more';
        viewmore.addEventListener('click', () => {
          ProjectController.setCurrent(proj); 
          renderProject();
        });

        div.appendChild(viewmore);
        li.appendChild(div);
        collection.appendChild(li);

        break
      } else if(tasks[i].done) {
        continue
      } else {
        let taskElementId = `proj${ proj.id }-task${ tasks[i].id }`;
        let itemHTML = `
          <div>
            <label>
              <input id="sidebar-${ taskElementId }" type="checkbox"/>
              <span>${ tasks[i].name }</span>
            </label>
            <a href="#!" class="secondary-content">
              <i class="material-icons">edit</i>
            </a>
          </div>
        `;
        li.insertAdjacentHTML('beforeend', itemHTML);
        collection.appendChild(li);

        // Synchronize this task checkbox on sidebar and on mainContainer
        let checkbox = collection.querySelector('#sidebar-'+taskElementId);
        checkbox.addEventListener('change', () => {
          tasks[i].done = checkbox.checked;

          let taskOnMainView = document.querySelector(`#main-${ taskElementId }`);
          if(taskOnMainView){ taskOnMainView.checked = checkbox.checked; }
        });

        j++;
      }
    }


    projectDiv.appendChild(collection);
    sidebarProjects.appendChild(projectDiv);
    
  });
}

export { renderSidebar, updateSidebar }