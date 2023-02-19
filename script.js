"use strict";
const nav = document.querySelector(".nav");
const btn = document.querySelector(".btn");

// const tabPorMedia = window.matchMedia("(max-width: 50em)");

btn.addEventListener("click", function () {
  btn.classList.toggle("btn--close");
  nav.classList.toggle("nav--opened");
});
