// - Factory Functions
const Project = (projName, projDescription) => {
  let name = projName;
  let description = projDescription;
  let tasks = [];
  let id;
  let taskIdCounter = 0;

  function addTask(task){ 
    task.id = ++taskIdCounter;
    tasks.push(task);
  }
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
    id: undefined,
  };

  return task
}


const ProjectController = (() => {
  let projectsArr = [];
  let projIdCounter = 0;
  let currentProject;

  function add(project){
    project.id = ++projIdCounter;
    projectsArr.push(project);
    
    currentProject = project;
  }

  function setCurrent(proj){ currentProject = proj; }
  function getCurrent(){ return currentProject }
  function getAll(){ return projectsArr }

  return { add, setCurrent, getCurrent, getAll }
})();


export { ProjectController, Project, Task }