function renderSidebar() {
  const sidebar = document.querySelector('#sideContainer');

  const sidebarHTML = `
    <h5 class="title">overview</h5>
  
    <div class="projects">
      <div id="prjct-sidebar-example" class="project">
  
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
  
      <div id="prjct-sidebar-1" class="project">
  
        <ul class="collection with-header">
          <li class="collection-header">
            <a href="#">
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

          <li class="collection-item">
            <div class="center-align">
              <a href="#" class="view-more">
                view more
              </a>
            </div>
          </li>
        </ul>
  
      </div>
  
      <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">
        <i class="material-icons left">add</i>New project
      </a>

    </div>
  `;

  sidebar.insertAdjacentHTML("beforeend", sidebarHTML);
}



export { renderSidebar }