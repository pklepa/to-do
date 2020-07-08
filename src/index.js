import { renderNavbar } from './navbar'
import { renderContent } from './content';

renderNavbar();
renderContent();

// - Materialize CSS Components Loaders
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems);
});
