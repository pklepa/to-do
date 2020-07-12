// - Factory Functions
const Project = (projName, projDescription) => {
  let name = projName;
  let description = projDescription;
  let tasks = [];
  let id;

  function addTask(task){ tasks.push(task) }
  function getAllTasks(){ return tasks }

  return { name, description, id, addTask, getAllTasks }
}

const Task = (arg) => {
  let task = {
    name: arg.name,
    description: arg.description || 'No description provided',
    dueDate: arg.dueDate || 'Not set',
    prio: arg.prio || 0,
    done: arg.done || false,
  };

  return task
}


const ProjectController = (() => {
  let projectsArr = [];
  let idCounter = 0;
  let currentProject;

  function add(project){
    project.id = ++idCounter;
    projectsArr.push(project);
    
    currentProject = project;
  }

  function getCurrent(){ return currentProject }
  function getAll(){ return projectsArr }

  return { add, getCurrent, getAll }
})();


export { ProjectController, Project, Task }