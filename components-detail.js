export const detailCard = (product) => {
  const productContainer = document.querySelector(".container");
  productContainer.innerHTML = `
    <div id=${product._id} class="card align-items-center justify-content-center flex-row">
        <img src=${product.imageUrl} class="w-25 mx-5 my-3" alt=${product.name}>
        <div class="card-body ms-5 text-start p-0 text-capitalize">
            <h5 class="text-capitalize"><b>Product:</b> ${product.name}</h5>
            <h5 class="text-capitalize"><b>Price:</b> ${product.price} $</h5>
        </div>
    </div>
    `;
};
