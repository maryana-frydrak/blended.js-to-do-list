import{n as d,a as m}from"./assets/vendor-CJpNu-tc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function f(e){const t=[];t.push(e);const s=JSON.stringify(t);localStorage.setItem("tasks",s)}function c(){return JSON.parse(localStorage.getItem("tasks"))}function p(){const e=c()||[];localStorage.setItem("tasks",JSON.stringify(e))}function g(e){const s=c().filter(o=>o.id!==e);localStorage.setItem("tasks",JSON.stringify(s))}function u({name:e,description:t,id:s}){return` <li class="task-list-item" data-id="${s}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${e}</h3>
      <p>${t}</p>
  </li>`}function h(e){return e.map(t=>u(t)).join("")}const a={form:document.querySelector(".header-form"),list:document.querySelector(".tasks-list"),btnTheme:document.querySelector(".theme-toggle-button")};function l(e){a.list.insertAdjacentHTML("beforeend",e)}function y(e){e.preventDefault();const{taskName:t,taskDescription:s}=e.target.elements;if(t.value.trim()===""||s.value.trim()==="")return alert("Поле не може бути пустим, введіть значення");const o={id:d(),name:t.value.trim(),description:s.value.trim()};l(u(o)),f(o),e.currentTarget.reset()}function b(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target.parentElement;g(t.dataset.id),t.remove()}function k(){document.body.classList.toggle("theme-dark")}p();l(h(c()));a.form.addEventListener("submit",y);a.list.addEventListener("click",b);a.btnTheme.addEventListener("click",k);const L=m.create({baseURL:"https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com"}),S=async()=>L.get("/public/students").then(e=>e.data),T={userListElem:document.querySelector(".js-user-list"),createUserForm:document.querySelector(".js-create-form"),updateUserForm:document.querySelector(".js-update-form")};document.addEventListener("DOMContentLoaded",()=>{S().then(e=>{const t=e.items,s=N(t);T.userListElem.innerHTML=s})});function v(e){return` <li class="card user-item" data-id="${id}">
      <img
      src="https://source.unsplash.com/1200×720/?random=431&book"
      alt="#
      class="user-avatar"
      />
      <h3 class="user-title">${e.firstName} ${e.lastName}</h3>
      <p>major: ${e.major}</p>
      <p>cohortYear: ${e.cohortYear}</p>
      <button class="btn button">DELETE</button>
  </li>`}function N(e){return e.map(v).join("")}
//# sourceMappingURL=index.js.map
