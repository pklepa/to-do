function renderNavbar() {
  const body = document.querySelector('body');

  const navbar = document.createElement('div');
  navbar.id = 'navbar';

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

  navbar.insertAdjacentHTML("beforeend", navHTML)
  body.appendChild(navbar);
}

export { renderNavbar }