import { fetchData, postData, deleteData } from "./fetch.js";
export const createList = (product) => {
  return ` <div id="${product._id}" class="card w-75 mb-3">
    <div class="card-body">
      <h5 class="card-title fw-bold">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text fw-medium">Product ID: ${product._id}</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
     Modify
    </button>
    <button type="button" class="btn btn-primary delete-button">
      Remove
    </button>
    </div>
  </div>`;
};
export const createForm = () => {
  return `<form class="w-100">
  <div class="form-control w-25 d-flex justify-content-between">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" />
  </div>
  
  
  <div class="form-control w-25 d-flex justify-content-between">
    <label for="brand">Brand</label>
    <input type="text" id="brand" name="brand" />
  </div>
  <div class="form-control w-25 d-flex justify-content-between">
    <label for="content">Content</label>
    <input type="text" id="content" name="description" />
  </div>
  
  <div class="form-control w-25 d-flex justify-content-between">
    <label for="img">Image URL</label>
    <input type="text" id="img" name="img" />
  </div>
  
  <div class="form-control w-25 d-flex justify-content-between">
    <label for="price">Price</label>
    <input type="number" id="price" name="price" />
  </div>
  
  <button id="button">ADD</button>
  <button class="button-get">GET</button>
  </form>`;
};

export const functionPost = async () => {
  const products = await fetchData();
  const title = document.getElementById("title");
  const description = document.getElementById("content");
  const brand = document.getElementById("brand");
  const img = document.getElementById("img");
  const price = document.getElementById("price");
  let product = {
    name: title.value,
    description: description.value,
    brand: brand.value,
    imageUrl: img.value,
    price: price.value,
  };
  await postData(product);
  products.push(product);
  window.location.reload();
};
export const functionDel = async (event) => {
  event.preventDefault();
  const productId = event.target.closest(".card").id;
  console.log(productId);
  if (productId) {
    await deleteData(productId);
    fetchData();
    window.location.reload();
  }
};
export const functionPut = async (event) => {
  console.log("ciao");
};
