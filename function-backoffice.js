import { postData, deleteData } from "./fetch.js";

export const functionPost = async () => {
  try {
    const title = document.getElementById("title").value;
    const description = document.getElementById("content").value;
    const brand = document.getElementById("brand").value;
    const img = document.getElementById("img").value;
    const price = document.getElementById("price").value;

    const product = {
      name: title,
      description: description,
      brand: brand,
      imageUrl: img,
      price: price,
    };

    await postData(product);
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

export const functionDel = async (event) => {
  try {
    event.preventDefault();
    const productId = event.target.closest(".card").id;
    if (productId) {
      await deleteData(productId);
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
};

export const getData = async (productToEdit) => {
  try {
    const inputTitle = document.querySelector("#input_name");
    const inputBrand = document.querySelector("#input_brand");
    const inputDescription = document.querySelector("#input_desc");
    const inputImg = document.querySelector("#input_img");
    const inputPrice = document.querySelector("#input_price");

    inputTitle.value = productToEdit.name;
    inputBrand.value = productToEdit.brand;
    inputDescription.value = productToEdit.description;
    inputImg.value = productToEdit.imageUrl;
    inputPrice.value = productToEdit.price;
  } catch (error) {
    console.error(error);
  }
};
