function renderMainContainer() {
  const pageLayout = document.querySelector('#pageLayout');

  const main = document.createElement('div');
  main.classList.add('col', 's8');

  const mainHTML = `
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
      <a href="#!" class="collection-item">#project-a</a>          
      <a href="#!" class="collection-item">#project-a</a>          
      <a href="#!" class="collection-item">#project-a</a>          
      <a href="#!" class="collection-item">#project-a</a>          
      <a href="#!" class="collection-item">#project-a</a>          
      <a href="#!" class="collection-item">#project-a</a>          
    </ul>

    <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2">
      <i class="material-icons left">add</i>New project
    </a>  
  `;

  main.insertAdjacentHTML("beforeend", mainHTML)
  pageLayout.appendChild(main);


}

export { renderMainContainer }