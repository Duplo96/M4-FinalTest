// index.js
import { fetchData } from "./fetch.js";
import {
  createList,
  createForm,
  functionPost,
  functionDel,
  functionPut,
} from "./components-back.js";
document.addEventListener("DOMContentLoaded", async function () {
  const containerForm = document.querySelector(".container-form");
  containerForm.innerHTML = createForm();
  const buttonPost = document.getElementById("button");
  const buttonGet = document.querySelector(".button-get");
  const container = document.querySelector(".container");
  const row = document.createElement("div");
  const products = await fetchData();
  row.className = "row";
  container.append(row);
  products
    .slice()
    .reverse()
    .forEach((product) => {
      row.innerHTML += createList(product);
    });

  buttonPost.addEventListener("click", async (event) => {
    event.preventDefault();
    functionPost();
  });
  buttonGet.addEventListener("click", async (event) => {
    event.preventDefault();
    fetchData();
  });
  const buttonsDel = document.querySelectorAll(".delete-button");
  buttonsDel.forEach((buttonDel) => {
    buttonDel.addEventListener("click", async (event) => {
      await functionDel(event);
    });
  });
});

const buttonPut = document.querySelector(".put-button");
buttonPut.addEventListener("click", async (event) => {
  await functionPut();
});
