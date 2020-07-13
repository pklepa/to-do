import { Project, ProjectController } from "./projectController";
import { DisplayController } from "./displayController";



function fetchProjects() {
  // localStorage.clear()

  if (!storageAvailable('localStorage')) return

  if (localStorage.length < 1) { firstTimeLoad(); }

  for (let i = 1; i <= localStorage.length; i++) {
    let raw = JSON.parse(localStorage.getItem(`proj${i}`));
    let proj = Project(JSON.parse(raw[0]));

    let tasks = JSON.parse(raw[1]);
    tasks.forEach(t => {
      proj.addTask(t);
    });

    ProjectController.add(proj);
  }

  // - Initial page rendering
  DisplayController.render();

}

function saveProjects() {
  if (!storageAvailable('localStorage')) return

  localStorage.clear();

  let i = 1;
  ProjectController.getAll().forEach(p => {
    let taskArr = p.getAllTasks();
    let proj = [JSON.stringify(p), JSON.stringify(taskArr)];

    localStorage.setItem(`proj${i}`, JSON.stringify(proj));
    i++;
  });
}


function firstTimeLoad() {
  // - Example Project
  let example = Project({ name: 'example', description: 'here\'s a brief description of what the project is about' });
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

}

function importProjects() {

}


function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}

export { fetchProjects, saveProjects }