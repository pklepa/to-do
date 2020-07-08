import { renderSidebar } from "./sidebar";
import { renderMainContainer } from "./mainContainer";

function renderContent() {
  const body = document.querySelector('body');

  const pageLayout = document.createElement('div');
  pageLayout.classList.add('row');
  pageLayout.id = 'pageLayout';

  body.appendChild(pageLayout);

  renderSidebar();
  renderMainContainer();
}

export { renderContent }