import { fetchProjects, saveProjects } from './localStorage';

// - Local Storage management
window.addEventListener('load', fetchProjects);
window.addEventListener('unload', saveProjects);