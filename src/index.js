
import { renderProject } from './project';
import { DisplayController } from './displayController';
import { ProjectController, Project } from './projectController';

// - Initial page rendering
DisplayController.render();


// - Example Project
let example = Project('example', 'here\'s a brief description of what the project is about');
example.addTask({
  name: 'urgent task',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  dueDate: '06 / Jul / 20',
  prio: 'Urgent',
  done: true,
});

example.addTask({
  name: 'high priority task',
  description: 'Duis sodales est nec hendrerit ultricies.',
  dueDate: '25 / Jul / 20',
  prio: 'High Priority',
});

example.addTask({
  name: 'medium priority task',
  description: 'Morbi rhoncus erat tellus, ut vehicula erat pretium vel.',
  dueDate: '04 / Aug / 20',
  prio: 'Medium Priority',
});

example.addTask({
  name: 'low priority task',
  description: 'Vivamus eu ante nec massa dictum blandit id ut mauris.',
  dueDate: '12 / Dec / 20',
  prio: 'Low Priority',
});

ProjectController.add(example);
renderProject(example);



// - Materialize-CSS Components Loaders
document.addEventListener('DOMContentLoaded', function () {
  const tooltipped = document.querySelectorAll('.tooltipped');

  M.Tooltip.init(tooltipped);
});



/*
  Things to think about:

  - Where to handle project deletions?
  - What about task deletions?
  - Should tasks have ids? Where to create them?
  - Should sidebar and main container be rendered together (in project creation)?


  TO-DO:

  - Dynamic rendering of sidebar
  - Project edit/delete
  - Completed tasks: syncronize project and sidebar
  - Completed tasks: stylize text (color or riscado)
  - Navigation to and from different projects via anchor tags in sidebar and homepage


  Extras:

  - Mostrar na sidebar somente tasks por fazer
  - Incluir tooltips em diversos lugares
  - Fazer about/contact page
  - Local storage ou Firebase
  - Se escolher firebase, fazer pagina/modal de login?
  - Incluir footer?
  - Realocar Materialize-CSS Components Loaders pra fora de index.js

*/