
import { renderProject } from './project';
import { DisplayController } from './displayController';
import { ProjectController, Project } from './projectController';


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
  done: false,
});

example.addTask({
  name: 'medium priority task',
  description: 'Morbi rhoncus erat tellus, ut vehicula erat pretium vel.',
  dueDate: '04 / Aug / 20',
  prio: 'Medium Priority',
  done: false,
});

example.addTask({
  name: 'low priority task',
  description: 'Vivamus eu ante nec massa dictum blandit id ut mauris.',
  dueDate: '12 / Dec / 20',
  prio: 'Low Priority',
  done: false,
});

ProjectController.add(example);



// - Initial page rendering
DisplayController.render();







/*
  Things to think about:

  - Should sidebar and main container be rendered together (in project creation)?


  TO-DO:

  - Completed tasks: stylize text (color or riscado)
  - Fix mobile view (remove sidebar, add hamburguer menu on navbar?)
  - Local storage or firebase
  - About/contact page


  Extras:

  - Se escolher firebase, fazer pagina/modal de login?
  - Incluir footer?

*/