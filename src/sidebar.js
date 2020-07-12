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


    const tasks = proj.getAllTasks();
    for (let i = 0; i < tasks.length; i++) {
      let li = document.createElement('li');
      li.classList.add('collection-item');

      if(i == 3){
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
      }


      let isTaskDone = tasks[i].done ? 'checked="checked"' : '';
      let itemHTML = `
        <div>
          <label>
            <input type="checkbox" ${ isTaskDone }/>
            <span>${ tasks[i].name }</span>
          </label>
          <a href="#!" class="secondary-content">
            <i class="material-icons">edit</i>
          </a>
        </div>
      `;
      li.insertAdjacentHTML('beforeend', itemHTML);
      collection.appendChild(li);
    }


    projectDiv.appendChild(collection);
    sidebarProjects.appendChild(projectDiv);
    
  });
}

export { renderSidebar, updateSidebar }