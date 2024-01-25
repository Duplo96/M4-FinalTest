import { createCard } from "./components-index.js";
import { fetchData } from "./fetch.js";
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const products = await fetchData();
    const container = document.querySelector(".container");
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);

    products
      .slice()
      .reverse()
      .forEach((product) => {
        row.innerHTML += createCard(product);
      });
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
  }
});
