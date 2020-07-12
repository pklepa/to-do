function renderNavbar() {
  const navbar = document.querySelector('#navbar');

  const navHTML = `
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">sh*t-to-do</a>
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
  `;

  // Inserts content in the display
  navbar.insertAdjacentHTML("beforeend", navHTML);
}

export { renderNavbar }