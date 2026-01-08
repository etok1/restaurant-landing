import { div } from "./index";

const aboutUs = {
  title: "About Us",
  story: "Passion for flavors, memorable experiences.",
  philosophy: "Simple ingredients, masterful preparation.",
  promise: "Fresh, seasonal, quality in every detail.",
  hours: "Daily 11AM-11PM",
  reservationNote: "Reservations recommended for evening dining",
  tagline: "Good food, good people, good times.",
};

function loadAbout() {
  document.body.className = "aboutBody";

  const container = document.createElement("div");
  container.className = "containerAbout";
  const content = document.createElement("div");
  content.className = "aboutContent";

  content.innerHTML = `
    <div class="about-header">
      <h1 class="about-title">${aboutUs.title}</h1>
      <div class="title-divider"></div>
    </div>
    
    <div class="about-sections">
      <div class="about-section">
        <h2 class="section-title">📖Our Story</h2>
        <p class="section-text">${aboutUs.story}</p>
      </div>
      
      <div class="about-section">
        <h2 class="section-title">🎯Our Philosophy</h2>
        <p class="section-text">${aboutUs.philosophy}</p>
      </div>
      
      <div class="about-section">
        <h2 class="section-title">🤝Our Promise</h2>
        <p class="section-text">${aboutUs.promise}</p>
      </div>
    </div>
    
    <div class="divider"></div>
    
    <div class="visit-section">
      <h2 class="visit-title">Visit Us</h2>
      <p class="hours">🕚 ${aboutUs.hours}</p>
      <p class="reservation">* ${aboutUs.reservationNote}</p>
    </div>
    
    
  `;

  container.appendChild(content);
  div.className = "about";
  div.appendChild(container);
}

export default loadAbout;
