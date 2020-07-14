import { renderHome } from "./home";


function renderNavbar() {
  const navbar = document.querySelector('#navbar');

  const navHTML = `
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">sh*t-to-do</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a class="btn-goHome" href="#">Home</a>
            </li>
            <li>
              <a class="modal-trigger" href="#modal-about">About</a>
            </li>
            <li>
              <a href="https://github.com/pklepa">Other works</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><h5 class="center">sh*t-to-do</h5></li>
        <li><a class="btn-goHome" href="#">Home</a></li>
        <li><a class="modal-trigger" href="#modal-about">About</a></li>
        <li><a href="https://github.com/pklepa">Other works</a></li>
        <li><div class="divider"></div></li>
      </ul>
  `;

  // Inserts content in the display
  navbar.insertAdjacentHTML("beforeend", navHTML);

  // Initialize Materialize-CSS components
  const sidenav = document.querySelector('.sidenav');
  M.Sidenav.init(sidenav);

  // Event listener on navbar
  const homeBtns = navbar.querySelectorAll('.btn-goHome');
  homeBtns.forEach(btn => {
    btn.addEventListener('click', () => { renderHome(); M.Sidenav.getInstance(sidenav).close() });
  });

}

export { renderNavbar }