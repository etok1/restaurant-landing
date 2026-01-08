import { div } from "./index";

const menu = {
  drinks: [
    {
      name: "Classic Mojito",
      price: 350,
      ingredients: ["rum", "lime", "mint", "soda water"],
    },
    {
      name: "Margarita",
      price: 400,
      ingredients: ["tequila", "lime juice", "triple sec", "salt"],
    },
    {
      name: "Old Fashioned",
      price: 450,
      ingredients: ["bourbon", "sugar", "angostura bitters", "orange"],
    },
    {
      name: "Negroni",
      price: 420,
      ingredients: ["gin", "campari", "vermouth"],
    },
    {
      name: "Piña Colada",
      price: 380,
      ingredients: ["rum", "coconut cream", "pineapple juice"],
    },
    {
      name: "Espresso Martini",
      price: 390,
      ingredients: ["vodka", "coffee liqueur", "espresso"],
    },
    {
      name: "Bloody Mary",
      price: 370,
      ingredients: ["vodka", "tomato juice", "tabasco", "worcestershire sauce"],
    },
    {
      name: "Aperol Spritz",
      price: 320,
      ingredients: ["aperol", "prosecco", "soda water"],
    },
    {
      name: "Daiquiri",
      price: 360,
      ingredients: ["rum", "lime juice", "sugar syrup"],
    },
    {
      name: "Moscow Mule",
      price: 340,
      ingredients: ["vodka", "ginger beer", "lime"],
    },
  ],

  appetizers: [
    {
      name: "Bruschetta with Tomatoes",
      price: 280,
      description: "Crispy bread with tomatoes, basil, and garlic",
    },
    {
      name: "Salmon Tartare",
      price: 450,
      description: "Fresh salmon with avocado and citrus dressing",
    },
    {
      name: "Cheese Platter",
      price: 520,
      description: "Assortment of 5 cheeses with nuts and honey",
    },
    {
      name: "Fried Calamari",
      price: 380,
      description: "Crispy calamari with aioli sauce",
    },
    {
      name: "Caprese Salad",
      price: 320,
      description: "Mozzarella, tomatoes, basil, olive oil",
    },
  ],

  main: [
    {
      name: "Ribeye Steak",
      price: 1200,
      weight: "300g",
      sides: ["potatoes", "grilled vegetables"],
    },
    {
      name: "Pasta Carbonara",
      price: 650,
      description: "Spaghetti with bacon, egg, and parmesan",
    },
    {
      name: "Grilled Salmon",
      price: 890,
      weight: "250g",
      sides: ["rice", "teriyaki sauce"],
    },
    {
      name: "Beef Burger",
      price: 580,
      ingredients: ["200g beef patty", "cheese", "lettuce", "sauce"],
    },
    {
      name: "Duck with Apples",
      price: 950,
      weight: "350g",
      sides: ["mashed potatoes", "berry sauce"],
    },
    {
      name: "Ricotta Ravioli",
      price: 720,
      description: "Homemade ravioli with spinach and creamy sauce",
    },
    {
      name: "Chicken Curry",
      price: 680,
      description: "Chicken in coconut curry with basmati rice",
    },
    {
      name: "Trout in Almonds",
      price: 820,
      weight: "280g",
      sides: ["steamed vegetables", "lemon"],
    },
    {
      name: "Lasagna Bolognese",
      price: 690,
      description: "Layered pasta with meat sauce and béchamel",
    },
    {
      name: "BBQ Pork Ribs",
      price: 780,
      weight: "400g",
      sides: ["french fries", "barbecue sauce"],
    },
  ],
};

function loadMenu() {
  document.body.className = "";
  div.className = "menu";

  const container = document.createElement("div");
  container.className = "containerMenu";
  const menuCont = document.createElement("div");
  menuCont.className = "menuCont";
  menuCont.innerHTML = `
    <div class="menu-section">
      <h2>🍸 Bar</h2>
      ${menu.drinks
        .map(
          (drink) => `
        <div class="menu-item">
          <h3>─ ${drink.name} - $${drink.price}</h3>
          <p>[${drink.ingredients.join(", ")}]</p>
        </div>
      `
        )
        .join("")}
    </div>
    
    <div class="menu-section">
      <h2>🥗 Appetizers</h2>
      ${menu.appetizers
        .map(
          (app) => `
        <div class="menu-item">
          <h3>─ ${app.name} - $${app.price}</h3>
          <p>[${app.description}]</p>
        </div>
      `
        )
        .join("")}
    </div>
    
    <div class="menu-section">
      <h2>🍽️ Main menu</h2>
      ${menu.main
        .map(
          (dish) => `
        <div class="menu-item">
          <h3>─ ${dish.name} - $${dish.price} ${
            dish.weight ? `(${dish.weight})` : ""
          }</h3>
          ${dish.description ? `<p>[${dish.description}]</p>` : ""}
          ${dish.sides ? `<p>(Sides: ${dish.sides.join(", ")})</p>` : ""}
        </div>
      `
        )
        .join("")}
  `;
  container.appendChild(menuCont);
  div.appendChild(container);
}

export default loadMenu;
