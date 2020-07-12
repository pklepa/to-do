import { renderNavbar } from "./navbar";
import { renderSidebar } from "./sidebar";
import { renderHome } from "./home";
import { loadModals } from "./modals";

const DisplayController = (() => {
  
  function render() {
    renderPageLayout();
    renderNavbar();
    renderSidebar();
    renderHome();

    loadModals();
  }

  function update() {

  }

  return { render, update }
})();



function renderPageLayout() {
  const todoApp = document.querySelector('#todoApp');

  const pageLayoutHTML = `
    <div id="navbar"></div>

    <div id="pageLayout" class="row">
      <div id="sideContainer" class="col s4"></div>

      <div id="mainContainer" class="col s8"></div>
    </div>

  `;

  todoApp.insertAdjacentHTML('beforeend', pageLayoutHTML );
}




export { DisplayController }