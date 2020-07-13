function renderNavbar() {
  const navbar = document.querySelector('#navbar');

  const navHTML = `
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">sh*t-to-do</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><h5 class="center">sh*t-to-do</h5></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><div class="divider"></div></li>
      </ul>
  `;

  // Inserts content in the display
  navbar.insertAdjacentHTML("beforeend", navHTML);

  // Initialize Materialize-CSS components
  document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });
}

export { renderNavbar }