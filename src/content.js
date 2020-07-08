function renderContent() {
  const body = document.querySelector('body');

  const content = document.createElement('div');
  content.id = 'content';

  const contentHTML = `
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
            <i class="material-icons left">add</i>New project</a>
        </div>

      </div>

      <!-- Main page content -->
      <div class="col s8">

        <!-- Breadcrumb -->
        <nav>
          <div class="nav-wrapper">
            <div class="col s12">
              <a href="#!" class="breadcrumb">home</a>
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

        </div>

      </div>
  `;

  content.insertAdjacentHTML("beforeend", contentHTML)
  body.appendChild(content);
}

export { renderContent }