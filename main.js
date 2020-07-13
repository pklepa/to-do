!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=(e,t)=>{let n=[],i=0;return{name:e,description:t,id:void 0,addTask:function(e){e.id=++i,n.push(e)},editTask:function(e){let t=n.findIndex(t=>t.id==e.id);for(const i in e)n[t][i]=e[i]},deleteTask:function(e){let t=n.findIndex(t=>t.id==e);n.splice(t,1)},getAllTasks:function(){return n}}},a=(()=>{let e,t=[],n=0;return{add:function(i){i.id=++n,t.push(i),e=i},edit:function(e){let n=t.findIndex(t=>t.id==e.id);for(const i in e)t[n][i]=e[i]},remove:function(e){let n=t.findIndex(t=>t.id==e);t.splice(n,1)},setCurrent:function(t){e=t},getCurrent:function(){return e},getAll:function(){return t}}})();function o(){const e=document.querySelector("#mainContainer");e.children.length>0&&(e.textContent="");e.insertAdjacentHTML("beforeend",'\n    <div class="mainContent">\n      \x3c!-- Breadcrumb --\x3e\n      <nav>\n        <div class="nav-wrapper">\n          <div class="col s12">\n            <a href="#!" class="breadcrumb">home</a>\n          </div>\n        </div>\n      </nav>\n\n      \x3c!-- Content --\x3e\n      <blockquote>\n        "You\'ve got shit to do and shit has got to be done." - <em>Someone, Somewhere.</em>\n      </blockquote>\n\n      <h4>welcome!</h4>\n      <p>This app in intended to help you get your shit together and do it.</p>\n      <p>Try adding some projects and split your large shit (known as projects) into smaller, managable, little shitties (or tasks).</p>\n\n      <ul style="max-width: 800px;" class="collection with-header">\n        <li class="collection-header"><h4>your projects</h4></li>\n      </ul>\n\n      <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">\n        <i class="material-icons left">add</i>New project\n      </a>\n    </div>\n  '),function(){const e=document.querySelector(".mainContent ul.collection");a.getAll().forEach(t=>{let n=document.createElement("a");n.classList.add("collection-item"),n.href="#",n.textContent="#"+t.name,n.addEventListener("click",()=>{a.setCurrent(t),c()}),e.appendChild(n)})}()}function d(){document.querySelector("#sideContainer").innerHTML="",l()}function l(){document.querySelector("#sideContainer").insertAdjacentHTML("beforeend",'\n    <h5 class="title">overview</h5>\n  \n    <div class="sidebar-projects">\n    </div>\n\n    <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">\n      <i class="material-icons left">add</i>New project\n    </a>\n  '),function(){const e=document.querySelector(".sidebar-projects");a.getAll().forEach(t=>{let n=document.createElement("div");n.classList.add("sidebar-project");let i=document.createElement("ul");i.classList.add("collection","with-header");let o=document.createElement("li");o.classList.add("collection-header");let d=document.createElement("a");d.href="#",d.textContent="#"+t.name,d.addEventListener("click",()=>{a.setCurrent(t),c()}),o.appendChild(d),i.appendChild(o);let l=0;const r=t.getAllTasks();for(let e=0;e<r.length;e++){let n=document.createElement("li");if(n.classList.add("collection-item"),3==l){let e=document.createElement("div");e.classList.add("center-align");let o=document.createElement("a");o.classList.add("view-more"),o.href="#",o.textContent="view more",o.addEventListener("click",()=>{a.setCurrent(t),c()}),e.appendChild(o),n.appendChild(e),i.appendChild(n);break}{let a=`proj${t.id}-task${r[e].id}`,o=r[e].done?'checked="checked"':"",d=`\n          <div>\n            <label>\n              <input id="sidebar-${a}" type="checkbox" ${o}/>\n              <span>${r[e].name}</span>\n            </label>\n          </div>\n        `;n.insertAdjacentHTML("beforeend",d),i.appendChild(n);let c=i.querySelector("#sidebar-"+a);c.addEventListener("change",()=>{r[e].done=c.checked;let t=document.querySelector("#main-"+a);t&&(t.checked=c.checked)}),l++}}n.appendChild(i),e.appendChild(n)})}()}function c(){const e=a.getCurrent(),t=document.querySelector("#mainContainer");t.children.length>0&&(t.textContent="");const n=document.createElement("div");n.classList.add("mainContent");const i=`\n    \x3c!-- Breadcrumb --\x3e\n    <nav>\n      <div class="nav-wrapper">\n        <div class="col s12">\n          <a href="#" class="breadcrumb btn-goHome">home</a>\n          <a id="delete-proj${e.id}" href="#modal-deleteProject" class="secondary-content secondary-content-breadcrumb modal-trigger"><i class="material-icons">delete</i></a>\n          <a id="edit-proj${e.id}" href="#modal-editProject" class="secondary-content secondary-content-breadcrumb modal-trigger"><i class="material-icons">edit</i></a>\n          <a href="#" class="breadcrumb">#${e.name}</a>\n        </div>\n      </div>\n    </nav>\n\n    \x3c!-- Checkboxes --\x3e\n    <blockquote>\n      ${e.description}\n    </blockquote>\n\n    <ul class="collapsible">\n    </ul>\n\n    <div class="center-align">\n      <a class="waves-effect waves-light btn-large red accent-2 modal-trigger" href="#modal2"><i class="material-icons left">add</i>Add Task</a>\n    </div>    \n  `;n.insertAdjacentHTML("beforeend",i),t.appendChild(n);document.querySelector(".breadcrumb.btn-goHome").addEventListener("click",o);n.querySelector("#edit-proj"+e.id).addEventListener("click",()=>{document.querySelector("input#edit_project_name").value=e.name,document.querySelector("input#edit_project_description").value=e.description,document.querySelector("p#edit_project_id").textContent=e.id,M.updateTextFields()});n.querySelector("#delete-proj"+e.id).addEventListener("click",()=>{document.querySelector("p#delete_project_id").textContent=e.id,M.updateTextFields()}),e.getAllTasks().forEach(e=>{r(e)});const d=document.querySelectorAll(".collapsible");M.Collapsible.init(d)}function r(e){const t=document.querySelector(".mainContent ul.collapsible");let n,i=e.done?'checked="checked"':"",o=`proj${a.getCurrent().id}-task${e.id}`;switch(e.prio){case"Urgent":n='<span class="new badge red" data-badge-caption="urgent"></span>';break;case"High Priority":n='<span class="new badge orange darken-2" data-badge-caption="high prio"></span>';break;case"Medium Priority":n='<span class="new badge amber" data-badge-caption="medium prio"></span>';break;case"Low Priority":n='<span class="new badge lime darken-2" data-badge-caption="low prio"></span>';break;default:n=""}let l=`\n      <li>\n        <div class="collapsible-header">\n          <label>\n            <input id="main-${o}" type="checkbox" ${i}/>\n            <span>${e.name}</span>\n          </label>\n          ${n}\n        </div>\n        <div class="collapsible-body">\n          <div class="my-body-container">\n            <div class="body-content">\n              <span><i class="material-icons">info</i>${e.description}</span>\n              <span name="due-date"><i class="material-icons">date_range</i> ${e.dueDate}</span>\n            </div>\n\n            <div class="icons">\n              <a id="delete-${o}" href="#" class="secondary-content">\n                <i class="material-icons">delete</i>\n              </a>\n              <a id="edit-${o}" class="secondary-content modal-trigger" href="#modal-editTask">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n    `;t.insertAdjacentHTML("beforeend",l),t.querySelector("#edit-"+o).addEventListener("click",()=>{document.querySelector("input#edit_task_name").value=e.name,document.querySelector("input#edit_task_description").value=e.description,document.querySelector("input#edit_task_dueDate").value=e.dueDate,document.querySelector("select#edit_task_priority").M_FormSelect.input.value=e.prio,document.querySelector("p#edit_task_id").textContent=e.id,M.updateTextFields()}),t.querySelector("#delete-"+o).addEventListener("click",()=>{a.getCurrent().deleteTask(e.id),c(),d()});let r=t.querySelector("#main-"+o);r.addEventListener("change",()=>{e.done=r.checked,a.getCurrent().editTask(e);let t=document.querySelector("#sidebar-"+o);t&&(t.checked=r.checked)})}function s(){!function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n      \x3c!-- Modal Structure --\x3e\n      <div id="modal1" class="modal modal-fixed-footer" style="max-height: 300px;">\n        <div class="modal-content">\n          <h4>Create new project</h4>\n          <p>Give your project a name and a brief description.</p>\n          <div class="row">\n            <div class="input-field col s4">\n              <input id="project_name" type="text" class="validate">\n              <label for="project_name">Project name</label>\n            </div>\n\n            <div class="input-field col s8">\n              <input id="project_description" type="text" class="validate">\n              <label for="project_description">Description</label>\n            </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n          <a id="btn-newProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n        </div>\n      </div>  \n  '),document.querySelector("#btn-newProjectConfirm").addEventListener("click",()=>{const e=document.querySelector("input#project_name").value,t=document.querySelector("input#project_description").value;let n=i(e,t);a.add(n),c(),d()})}(),function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n    \x3c!-- Modal Structure --\x3e\n    <div id="modal2" class="modal modal-fixed-footer" style="max-height: 400px;" >\n      <div class="modal-content">\n        <h4>New task</h4>\n        <div class="row">\n          <div class="input-field col s8">\n            <i class="material-icons prefix">check_circle</i>\n            <input id="task_name" type="text" class="validate">\n            <label for="task_name">Task name</label>\n          </div>\n          \n          <div class="input-field col s4">\n            <select id="task_priority">\n              <option value="" disabled selected>Not set</option>\n              <option value="1">Urgent</option>\n              <option value="2">High Priority</option>\n              <option value="3">Medium Priority</option>\n              <option value="4">Low Priority</option>\n            </select>\n            <label>Priority Level</label>\n          </div> \n        </div>\n\n        <div class="row">\n          <div class="input-field col s8">\n            <i class="material-icons prefix">info</i>\n            <input id="task_description" type="text" class="validate">\n            <label for="task_description">Description</label>\n          </div>   \n          \n          <div class="input-field col s4">\n            <i class="material-icons prefix">date_range</i>\n            <input id="task_dueDate" type="text" class="datepicker">\n            <label for="task_dueDate">Due Date</label>\n          </div>\n        </div>\n      </div>\n\n      <div class="modal-footer">\n        <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n        <a id="btn-newTaskConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n      </div>\n    </div>\n  '),document.querySelector("#btn-newTaskConfirm").addEventListener("click",()=>{const e=document.querySelector("input#task_name").value,t=document.querySelector("input#task_description").value,n=document.querySelector("input#task_dueDate").value,i=document.querySelector("select#task_priority").M_FormSelect.input.value;let o={name:(l={name:e,description:t,dueDate:n,prio:i}).name,description:l.description||"No description provided",dueDate:l.dueDate||"Not set",prio:l.prio||0,done:l.done,id:l.id||void 0};var l;a.getCurrent().addTask(o),r(o),d()})}(),function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n    \x3c!-- Modal Structure --\x3e\n    <div id="modal-editTask" class="modal modal-fixed-footer" style="max-height: 400px;" >\n      <div class="modal-content">\n        <h4>Edit task</h4>\n        <div class="row">\n          <div class="input-field col s8">\n            <i class="material-icons prefix">check_circle</i>\n            <input id="edit_task_name" type="text" class="validate">\n            <label for="edit_task_name">Task name</label>\n          </div>\n          \n          <div class="input-field col s4">\n            <select id="edit_task_priority">\n              <option value="" disabled selected>Not set</option>\n              <option value="1">Urgent</option>\n              <option value="2">High Priority</option>\n              <option value="3">Medium Priority</option>\n              <option value="4">Low Priority</option>\n            </select>\n            <label>Priority Level</label>\n          </div> \n        </div>\n\n        <div class="row">\n          <div class="input-field col s8">\n            <i class="material-icons prefix">info</i>\n            <input id="edit_task_description" type="text" class="validate">\n            <label for="edit_task_description">Description</label>\n          </div>   \n          \n          <div class="input-field col s4">\n            <i class="material-icons prefix">date_range</i>\n            <input id="edit_task_dueDate" type="text" class="datepicker">\n            <label for="edit_task_dueDate">Due Date</label>\n          </div>\n        </div>\n\n        <p id="edit_task_id" style="display:none"></p>\n      </div>\n\n      <div class="modal-footer">\n        <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n        <a id="btn-editTaskConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n      </div>\n    </div>\n  '),document.querySelector("#btn-editTaskConfirm").addEventListener("click",()=>{const e=document.querySelector("input#edit_task_name").value,t=document.querySelector("input#edit_task_description").value,n=document.querySelector("input#edit_task_dueDate").value,i=document.querySelector("select#edit_task_priority").M_FormSelect.input.value,o=document.querySelector("p#edit_task_id").textContent;a.getCurrent().editTask({name:e,description:t,dueDate:n,prio:i,id:o}),c(),d()})}(),function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n      \x3c!-- Modal Structure --\x3e\n      <div id="modal-editProject" class="modal modal-fixed-footer" style="max-height: 300px;">\n        <div class="modal-content">\n          <h4>Edit project</h4>\n          <p>Give your project a name and a brief description.</p>\n          <div class="row">\n            <div class="input-field col s4">\n              <input id="edit_project_name" type="text" class="validate">\n              <label for="edit_project_name">Project name</label>\n            </div>\n\n            <div class="input-field col s8">\n              <input id="edit_project_description" type="text" class="validate">\n              <label for="edit_project_description">Description</label>\n            </div>\n          </div>\n\n          <p id="edit_project_id" style="display:none"></p>\n\n        </div>\n        <div class="modal-footer">\n          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n          <a id="btn-editProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n        </div>\n      </div>  \n  '),document.querySelector("#btn-editProjectConfirm").addEventListener("click",()=>{const e=document.querySelector("input#edit_project_name").value,t=document.querySelector("input#edit_project_description").value,n=document.querySelector("p#edit_project_id").textContent;a.edit({name:e,description:t,id:n}),c(),d()})}(),function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n      \x3c!-- Modal Structure --\x3e\n      <div id="modal-deleteProject" class="modal modal-fixed-footer" style="max-height: 250px;">\n        <div class="modal-content">\n          <h4>Delete project</h4>\n          <p>If you delete this project, every task inside it will be lost as well. Do you wish to continue?</p>\n\n          <p id="delete_project_id" style="display:none"></p>\n        </div>\n        <div class="modal-footer">\n          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n          <a id="btn-deleteProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n        </div>\n      </div>  \n  '),document.querySelector("#btn-deleteProjectConfirm").addEventListener("click",()=>{const e=document.querySelector("p#delete_project_id").textContent;a.remove(e),o(),d()})}();const e=document.querySelectorAll(".modal"),t=document.querySelectorAll(".datepicker"),n=document.querySelectorAll("select");M.Datepicker.init(t),M.FormSelect.init(n),M.Modal.init(e,{onCloseEnd:()=>{document.querySelectorAll(".modal-content .input-field").forEach(e=>{for(let t=0;t<e.children.length;t++){let n=e.children[t];"INPUT"==n.tagName?(n.value="",n.classList.remove("valid")):"LABEL"==n.tagName&&n.classList.remove("active")}})}})}const u={render:function(){!function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n    <div id="navbar"></div>\n\n    <div id="pageLayout" class="row">\n      <div id="sideContainer" class="col s4"></div>\n\n      <div id="mainContainer" class="col s8"></div>\n    </div>\n\n  ')}(),document.querySelector("#navbar").insertAdjacentHTML("beforeend",'\n      <nav>\n        <div class="nav-wrapper">\n          <a href="#" class="brand-logo center">sh*t-to-do</a>\n          <ul id="nav-mobile" class="right hide-on-med-and-down">\n            <li>\n              <a href="#">Home</a>\n            </li>\n            <li>\n              <a href="#">About</a>\n            </li>\n            <li>\n              <a href="#">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n  '),l(),o(),s()},update:function(){}};let p=i("example","here's a brief description of what the project is about");p.addTask({name:"urgent task",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",dueDate:"06 / Jul / 20",prio:"Urgent",done:!0}),p.addTask({name:"high priority task",description:"Duis sodales est nec hendrerit ultricies.",dueDate:"25 / Jul / 20",prio:"High Priority",done:!1}),p.addTask({name:"medium priority task",description:"Morbi rhoncus erat tellus, ut vehicula erat pretium vel.",dueDate:"04 / Aug / 20",prio:"Medium Priority",done:!1}),p.addTask({name:"low priority task",description:"Vivamus eu ante nec massa dictum blandit id ut mauris.",dueDate:"12 / Dec / 20",prio:"Low Priority",done:!1}),a.add(p),u.render()}]);