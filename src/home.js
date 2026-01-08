import { div } from "./index";

function loadHome() {
  document.body.className = "";
  div.className = "home";
  const containerHead = document.createElement("div");
  containerHead.className = "containerHead";
  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");
  heading.textContent = "Beatz Cafe";
  paragraph.textContent = "Authentic food and served with love";
  containerHead.appendChild(heading);
  containerHead.appendChild(paragraph);
  div.appendChild(containerHead);
}

export default loadHome;
