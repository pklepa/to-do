function renderPageLayout() {
  const body = document.querySelector('body');

  const pageLayout = document.createElement('div');
  pageLayout.classList.add('row');
  pageLayout.id = 'pageLayout';

  const main = document.createElement('div');
  main.classList.add('col', 's8');
  main.id = 'mainContainer';

  const sidebar = document.createElement('div');
  sidebar.classList.add('col', 's4');
  sidebar.id = 'sideContainer';

  pageLayout.appendChild(sidebar);
  pageLayout.appendChild(main);
  body.appendChild(pageLayout);
}

export { renderPageLayout }