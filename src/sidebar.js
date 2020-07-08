function renderSidebar() {
  const pageLayout = document.querySelector('#pageLayout');

  const sidebar = document.createElement('div');
  sidebar.classList.add('col', 's4');
  sidebar.id = 'sideBar';

  const sidebarHTML = `
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
  `;

  sidebar.insertAdjacentHTML("beforeend", sidebarHTML)
  pageLayout.appendChild(sidebar);

}

export { renderSidebar }