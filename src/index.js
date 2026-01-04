import "./styles.css";
import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
console.log("clock");

export const div = document.getElementById("content");
const homeBtn = document.getElementById("home-nav");
const menuBtn = document.getElementById("menu-nav");
const aboutBtn = document.getElementById("about-nav");
loadHome();

homeBtn.addEventListener("click", () => {
  div.textContent = "";
  loadHome();
});

menuBtn.addEventListener("click", () => {
  div.textContent = "";
  loadMenu();
});

aboutBtn.addEventListener("click", () => {
  div.textContent = "";
  loadAbout();
});
