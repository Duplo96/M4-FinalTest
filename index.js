import { fetchData, postData, deleteData } from "./fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("content");
  const brand = document.getElementById("brand");
  const img = document.getElementById("img");
  const price = document.getElementById("price");
  const button = document.getElementById("button");
  const buttonGet = document.querySelector(".button-get");
  const buttonDel = document.querySelector(".button-delete");

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    const prodotto = {
      name: title.value,
      description: description.value,
      brand: brand.value,
      imageUrl: img.value,
      price: price.value,
    };

    postData(prodotto);
  });

  buttonGet.addEventListener("click", async (event) => {
    event.preventDefault();
    fetchData();
  });
  buttonDel.addEventListener("click", async (event) => {
    event.preventDefault();
    deleteData();
  });
  fetchData();
});
