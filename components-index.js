export const createCard = (product) => {
  return `
<div class="card shadow col-4 mx-2 my-5  p-0" style="width: 18rem" id=${product._id}>
<img src="${product.imageUrl}" class="card-img-top" alt="" />
<div class="card-body">
  <h5 class="card-title text-capitalize">${product.name}</h5>
  <p id="brands" class="card-text text-capitalize">${product.brand}</p>
  <p id="descriptions" class="card-text text-capitalize">${product.description}</p>
  <p id="prices" class="card-text text-capitalize">${product.price}€</p>
  <a href="./detail.html?id=${product._id}" class="btn btn-primary">button</a>
  </div>`;
};
