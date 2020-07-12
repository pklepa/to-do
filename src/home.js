import { ProjectController } from "./projectController";
import { renderProject } from "./project";

function renderHome() {
  const main = document.querySelector('#mainContainer');
  if(main.children.length > 0){ main.textContent = ""; }

  const contentHTML = `
    <div class="mainContent">
      <!-- Breadcrumb -->
      <nav>
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="#!" class="breadcrumb">home</a>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <blockquote>
        "You've got shit to do and shit has got to be done." - <em>Someone, Somewhere.</em>
      </blockquote>

      <h4>welcome!</h4>
      <p>This app in intended to help you get your shit together and do it.</p>
      <p>Try adding some projects and split your large shit (known as projects) into smaller, managable, little shitties (or tasks).</p>

      <ul style="max-width: 800px;" class="collection with-header">
        <li class="collection-header"><h4>your projects</h4></li>
      </ul>

      <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">
        <i class="material-icons left">add</i>New project
      </a>
    </div>
  `;

  // Inserts the content template in the document
  main.insertAdjacentHTML("beforeend", contentHTML);

  insertProjectsInHomePage();
}

function insertProjectsInHomePage() {
  const collection = document.querySelector('.mainContent ul.collection');

  const projects = ProjectController.getAll();
  projects.forEach(proj => {
    let projectAnchor = document.createElement('a');
    projectAnchor.classList.add('collection-item');
    projectAnchor.href = "#";
    projectAnchor.textContent = `#${ proj.name }`;
    projectAnchor.addEventListener('click', () => {
      ProjectController.setCurrent(proj); 
      renderProject();
    });

    collection.appendChild(projectAnchor);
  })
}



export { renderHome }