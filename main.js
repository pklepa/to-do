!function(n){var e={};function a(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return n[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=e,a.d=function(n,e,i){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)a.d(i,t,function(e){return n[e]}.bind(null,t));return i},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e),function(){const n=document.querySelector("body"),e=document.createElement("div");e.id="navbar",e.insertAdjacentHTML("beforeend",'\n    <nav>\n      <div class="nav-wrapper">\n        <a href="#" class="brand-logo center">sh*t-to-do</a>\n        <ul id="nav-mobile" class="right hide-on-med-and-down">\n          <li>\n            <a href="#">Home</a>\n          </li>\n          <li>\n            <a href="#">About</a>\n          </li>\n          <li>\n            <a href="#">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  '),n.appendChild(e)}(),function(){const n=document.querySelector("body"),e=document.createElement("div");e.classList.add("row"),e.id="pageLayout";const a=document.createElement("div");a.classList.add("col","s8"),a.id="mainContainer";const i=document.createElement("div");i.classList.add("col","s4"),i.id="sideContainer",e.appendChild(i),e.appendChild(a),n.appendChild(e)}(),document.querySelector("#sideContainer").insertAdjacentHTML("beforeend",'\n    <h5 class="title">overview</h5>\n  \n    <div class="projects">\n      <div id="prjct-sidebar-example" class="project">\n  \n        <ul class="collection with-header">\n          <li class="collection-header">\n            <a id="prjct-example" href="#">\n              <h6>#example</h6>\n            </a>\n          </li>\n          <li class="collection-item">\n            <div>\n              <label>\n                <input type="checkbox"/>\n                <span>daily stuff</span>\n              </label>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </li>\n        </ul>\n  \n      </div>\n  \n      <div id="prjct-sidebar-1" class="project">\n  \n        <ul class="collection with-header">\n          <li class="collection-header">\n            <a href="#">\n              <h6>#project-A</h6>\n            </a>\n          </li>\n          <li class="collection-item">\n            <div>\n              <label>\n                <input type="checkbox" checked="checked"/>\n                <span>do this</span>\n              </label>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </li>\n          <li class="collection-item">\n            <div>\n              <label>\n                <input type="checkbox" checked="checked"/>\n                <span>do that</span>\n              </label>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </li>\n          <li class="collection-item">\n            <div>\n              <label>\n                <input type="checkbox"/>\n                <span>do something else</span>\n              </label>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </li>\n\n          <li class="collection-item">\n            <div class="center-align">\n              <a href="#" class="view-more">\n                view more\n              </a>\n            </div>\n          </li>\n        </ul>\n  \n      </div>\n  \n      <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">\n        <i class="material-icons left">add</i>New project\n      </a>\n\n      \x3c!-- Modal Structure --\x3e\n      <div id="modal1" class="modal modal-fixed-footer" style="max-height: 300px;">\n        <div class="modal-content">\n          <h4>Create new project</h4>\n          <p>Give your project a name and a brief description.</p>\n          <div class="input-field col s4">\n            <input id="project_name" type="text" class="validate">\n            <label for="project_name">Project name</label>\n          </div>\n          <div class="input-field col s8">\n            <input id="project_description" type="text" class="validate">\n            <label for="project_description">Description</label>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n          <a id="btn-newProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n        </div>\n      </div>\n\n    </div>\n  '),function(n){const e=document.querySelector("#mainContainer"),a=document.createElement("div");a.classList.add("mainContent"),a.insertAdjacentHTML("beforeend",'\n    \x3c!-- Breadcrumb --\x3e\n    <nav>\n      <div class="nav-wrapper">\n        <div class="col s12">\n          <a href="#!" class="breadcrumb">home</a>\n          <a href="#!" class="secondary-content tooltipped" data-position="left" data-tooltip="Delete this project"><i class="material-icons">delete</i></a>\n          <a href="#!" class="breadcrumb">#example</a>\n        </div>\n      </div>\n    </nav>\n\n    \x3c!-- Checkboxes --\x3e\n    <blockquote>\n      here\'s a brief description of what the project is about\n    </blockquote>\n\n    <ul class="collapsible">\n      <li class="active">\n        <div class="collapsible-header">\n          <label>\n            <input type="checkbox" checked="checked"/>\n            <span>urgent task</span>\n          </label>\n          <span class="new badge red" data-badge-caption="urgent"></span>\n        </div>\n        <div class="collapsible-body">\n          <div class="my-body-container">\n            <div class="body-content">\n              <span><i class="material-icons">info</i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n              <span name="due-date"><i class="material-icons">date_range</i>06 / Jul / 20</span>\n            </div>\n\n            <div class="icons">\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">delete</i>\n              </a>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n\n      <li>\n        <div class="collapsible-header">\n          <label>\n            <input type="checkbox"/>\n            <span>high priority task</span>\n          </label>\n          <span class="new badge orange darken-2" data-badge-caption="high prio"></span>\n        </div>\n        <div class="collapsible-body">\n          <div class="my-body-container">\n            <div class="body-content">\n              <span><i class="material-icons">info</i>Duis sodales est nec hendrerit ultricies.</span>\n              <span name="due-date"><i class="material-icons">date_range</i>25 / Jul / 20</span>\n            </div>\n\n            <div class="icons">\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">delete</i>\n              </a>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n\n      <li>\n        <div class="collapsible-header">\n          <label>\n            <input type="checkbox"/>\n            <span>medium priority task</span>\n          </label>\n          <span class="new badge amber" data-badge-caption="medium prio"></span>\n        </div>\n        <div class="collapsible-body">\n          <div class="my-body-container">\n            <div class="body-content">\n              <span><i class="material-icons">info</i>Morbi rhoncus erat tellus, ut vehicula erat pretium vel.</span>\n              <span name="due-date"><i class="material-icons">date_range</i>04 / Aug / 20</span>\n            </div>\n\n            <div class="icons">\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">delete</i>\n              </a>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n\n      <li>\n        <div class="collapsible-header">\n          <label>\n            <input type="checkbox"/>\n            <span>low priority task</span>\n          </label>\n          <span class="new badge lime darken-2" data-badge-caption="low prio"></span>\n        </div>\n        <div class="collapsible-body">\n          <div class="my-body-container">\n            <div class="body-content">\n              <span><i class="material-icons">info</i>Vivamus eu ante nec massa dictum blandit id ut mauris.</span>\n              <span name="due-date"><i class="material-icons">date_range</i>12 / Dec / 20</span>\n            </div>\n\n            <div class="icons">\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">delete</i>\n              </a>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n\n    <div class="center-align">\n      <a class="waves-effect waves-light btn-large red accent-2 modal-trigger" href="#modal2"><i class="material-icons left">add</i>Add Task</a>\n    </div>\n\n\n    \x3c!-- Modal Structure --\x3e\n    <div id="modal2" class="modal modal-fixed-footer" style="max-height: 480px;" >\n      <div class="modal-content">\n        <h4>New task</h4>\n        <div class="row">\n          <div class="input-field col s8">\n            <input id="task_name" type="text" class="validate">\n            <label for="task_name">Task name</label>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="input-field col s6">\n            <input id="task_dueDate" type="text" class="datepicker">\n            <label for="task_dueDate">Due Date</label>\n          </div> \n          \n          <div class="input-field col s6">\n            <select>\n              <option value="" disabled selected>Choose your option</option>\n              <option value="1">Urgent</option>\n              <option value="2">High Priority</option>\n              <option value="3">Medium Priority</option>\n              <option value="4">Low Priority</option>\n            </select>\n            <label>Priority Level</label>\n          </div>\n        </div>\n\n\n        <div class="row">\n          <div class="input-field col s12">\n            <input id="task_description" type="text" class="validate">\n            <label for="task_description">Description</label>\n          </div>        \n        </div>\n        \n      </div>\n      <div class="modal-footer">\n        <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n        <a id="btn-newProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n      </div>\n    </div>\n  '),e.appendChild(a)}();document.querySelector("projects");let i=[],t=0;document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelectorAll(".collapsible"),e=document.querySelectorAll(".modal"),a=document.querySelectorAll(".tooltipped"),i=document.querySelectorAll(".datepicker"),t=document.querySelectorAll("select");M.Collapsible.init(n),M.Modal.init(e,{onCloseEnd:()=>{document.querySelectorAll(".modal-content .input-field").forEach(n=>{for(let e=0;e<n.children.length;e++){let a=n.children[e];"INPUT"==a.tagName?(a.value="",a.classList.remove("valid")):"LABEL"==a.tagName&&a.classList.remove("active")}})}}),M.Tooltip.init(a),M.Datepicker.init(i),M.FormSelect.init(t)})),document.querySelector("#btn-newProjectConfirm").addEventListener("click",()=>{const n=document.querySelector("input#project_name").value,e=document.querySelector("input#project_description").value;let a=l(n,e);i.push(a)});const l=(n,e)=>({name:n,description:e||"hello",tasks:{},id:++t})}]);