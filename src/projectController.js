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

  function editTask(changes) {
    let index = tasks.findIndex(t => t.id == changes.id);

    for (const key in changes) {
      tasks[index][key] = changes[key];
    }  
  }
  
  function deleteTask(taskId) {
    let index = tasks.findIndex(t => t.id == taskId);

    tasks.splice(index, 1);
  }

  function getAllTasks(){ return tasks }

  return { name, description, id, addTask, editTask, deleteTask, getAllTasks }
}



const Task = (arg) => {
  let task = {
    name: arg.name,
    description: arg.description || 'No description provided',
    dueDate: arg.dueDate || 'Not set',
    prio: arg.prio || 0,
    done: arg.done,
    id: arg.id || undefined,
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

  function edit(changes){
    let index = projectsArr.findIndex(p => p.id == changes.id);

    for (const key in changes) {
      projectsArr[index][key] = changes[key];
    }
  }

  function remove(id){
    let index = projectsArr.findIndex(p => p.id == id);

    projectsArr.splice(index, 1);
  }

  function setCurrent(proj){ currentProject = proj; }
  function getCurrent(){ return currentProject }
  function getAll(){ return projectsArr }

  return { add, edit, remove, setCurrent, getCurrent, getAll }
})();


export { ProjectController, Project, Task }