const productApi = "https://striveschool-api.herokuapp.com/api/product/";
let products;
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDYxMzM2NDMsImV4cCI6MTcwNzM0MzI0M30.zk_C74s1SwQP9wyIK_4xgeCdmbTfavSb-0ppG9A8P5g";
const objHttpsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
};
const fetchData = async () => {
  try {
    const response = await fetch(productApi, objHttpsGet);
    products = await response.json();
    console.log(products);
    products.map((product) => {
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
    });
  } catch (error) {
    console.error(error);
  }
};
const postData = async (prodotto) => {
  try {
    await fetch(productApi, {
      method: "POST",
      body: JSON.stringify(prodotto),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
    console.log("ciao");
  } catch (error) {
    console.error(error);
  }
};
const deleteData = async (productId) => {
  try {
    await fetch(`${productApi}/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
    console.log(`Prodotto con ID ${productId} eliminato con successo.`);
  } catch (error) {
    console.error(error);
  }
};

export { fetchData, postData, deleteData };
