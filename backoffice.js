import { fetchData } from "./fetch.js";
import { createList, createForm, createModal } from "./components-back.js";
import { functionPost, functionDel, getData } from "./function-backoffice.js";
const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDYxMzM2NDMsImV4cCI6MTcwNzM0MzI0M30.zk_C74s1SwQP9wyIK_4xgeCdmbTfavSb-0ppG9A8P5g";
const objHttpsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
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
  const putBtns = document.querySelectorAll(".button-put");
  putBtns.forEach((putbtn) => {
    putbtn.addEventListener("click", async (event) => {
      const id = event.target.closest(".card").id;
      let fetchDataId = async () => {
        try {
          const response = await fetch(API_ENDPOINT + id, objHttpsGet);
          const products = await response.json();
          return products;
        } catch (error) {
          console.log(error);
        }
      };
      const productToEdit = await fetchDataId();
      await getData(productToEdit);
      console.log(productToEdit);
      console.log(productToEdit.name);
      const saveBtn = document.querySelector(".save-button");
      saveBtn.addEventListener("click", async () => {
        const inputTitle = document.querySelector("#input_name");
        const inputBrand = document.querySelector("#input_brand");
        const inputDescripition = document.querySelector("#input_desc");
        const inputImg = document.querySelector("#input_img");
        const inputPrice = document.querySelector("#input_price");
        const updatedProduct = {
          name: inputTitle.value,
          brand: inputBrand.value,
          description: inputDescripition.value,
          imageUrl: inputImg.value,
          price: inputPrice.value,
        };

        try {
          const response = await fetch(API_ENDPOINT + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify(updatedProduct),
          });
          if (response.ok) {
            alert("Product updated successfully.");
            window.location.reload();
          } else {
            alert("Error updating the product.");
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
    const modal = createModal({
      name: "",
      brand: "",
      description: "",
      imageUrl: "",
      price: "",
    });

    const containerModal = document.querySelector(".container-modal");
    containerModal.innerHTML = modal;
    const saveBtn = document.querySelector(".save-button");
    saveBtn.addEventListener("click", async () => {});
  });
});
