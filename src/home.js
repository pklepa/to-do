function renderHome() {
  const main = document.querySelector('#mainContainer');

  const content = document.createElement('div');
  content.classList.add('mainContent');

  const contentHTML = `
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
    <p>Try adding some projects and split your large shit (projects) into smaller, managable, little shitties (or tasks).</p>

    <ul style="max-width: 800px;" class="collection with-header">
      <li class="collection-header"><h4>your projects</h4></li>
      <a href="#!" class="collection-item">#example</a>           
    </ul>

    <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">
      <i class="material-icons left">add</i>New project
    </a>
  `;

  content.insertAdjacentHTML("beforeend", contentHTML);
  main.appendChild(content);
}


export { renderHome }