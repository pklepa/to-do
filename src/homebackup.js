function renderContent() {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.id = 'container';

  const containerHTML = `
    <div id="pageLayout" class="row">

      <!-- Side navigation panel -->
      <div id="sideBar" class="col s4">
        <h5 class="title">overview</h5>

        <div class="projects">
          <div class="project general">

            <ul class="collection with-header">
              <li class="collection-header">
                <a id="prjct-example" href="#">
                  <h6>#example</h6>
                </a>
              </li>
              <li class="collection-item">
                <div>
                  <label>
                    <input type="checkbox"/>
                    <span>daily stuff</span>
                  </label>
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">edit</i>
                  </a>
                </div>
              </li>
            </ul>

          </div>

          <div class="project">

            <ul class="collection with-header">
              <li class="collection-header">
                <a id="prjct-project-A" href="#">
                  <h6>#project-A</h6>
                </a>
              </li>
              <li class="collection-item">
                <div>
                  <label>
                    <input type="checkbox" checked="checked"/>
                    <span>do this</span>
                  </label>
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">edit</i>
                  </a>
                </div>
              </li>
              <li class="collection-item">
                <div>
                  <label>
                    <input type="checkbox" checked="checked"/>
                    <span>do that</span>
                  </label>
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">edit</i>
                  </a>
                </div>
              </li>
              <li class="collection-item">
                <div>
                  <label>
                    <input type="checkbox"/>
                    <span>do something else</span>
                  </label>
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">edit</i>
                  </a>
                </div>
              </li>
            </ul>

          </div>

          <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2">
            <i class="material-icons left">add</i>New project
          </a>
        </div>

      </div>

      <!-- Main page content -->
      <div class="col s8">

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


      </div>
  `;

  container.insertAdjacentHTML("beforeend", containerHTML)
  body.appendChild(container);
}

export { renderContent }