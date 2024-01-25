import { fetchData, postData } from "./fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("content");
  const brand = document.getElementById("brand");
  const img = document.getElementById("img");
  const price = document.getElementById("price");
  const button = document.getElementById("button");
  const buttonGet = document.querySelector(".button-get");
  const buttonDel = document.querySelector(".button-delete");
  let valueProduct = {};

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    const prodotto = {
      name: title.value,
      description: description.value,
      brand: brand.value,
      imageUrl: img.value,
      price: price.value,
    };
    valueProduct = prodotto;
    postData(valueProduct);
  });
  const displayProduct = (product) => {
    const container = document.querySelector(".container");
    container.innerHTML += `
    <div class="card" id=${product.id}>
    <img src="${product.imageUrl}" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p id="brands" class="card-text">${product.brand}</p>
      <p id="descriptions" class="card-text">${product.description}</p>
      <p id="prices" class="card-text">${product.price}</p>
      <a href="#" class="btn btn-primary">button</a>
      </div>`;
  };
  buttonGet.addEventListener("click", async (event) => {
    event.preventDefault();
    await fetchData();
  });
  buttonDel.addEventListener("click", async (event) => {
    event.preventDefault();

    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDYxMzM2NDMsImV4cCI6MTcwNzM0MzI0M30.zk_C74s1SwQP9wyIK_4xgeCdmbTfavSb-0ppG9A8P5g",
        },
      }
    );
  });
  displayProduct();
});
