const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDYxMzM2NDMsImV4cCI6MTcwNzM0MzI0M30.zk_C74s1SwQP9wyIK_4xgeCdmbTfavSb-0ppG9A8P5g";

const objHttps = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const handleErrors = (error) => {
  console.error(error);
};

const fetchData = async () => {
  try {
    const response = await fetch(API_ENDPOINT, objHttps);
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    handleErrors(error);
    throw error;
  }
};

const postData = async (product) => {
  try {
    await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    console.log("Data sent successfully.");
  } catch (error) {
    handleErrors(error);
    throw error;
  }
};

const deleteData = async (productId) => {
  try {
    await fetch(`${API_ENDPOINT}/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    console.log(`Product with ID ${productId} deleted successfully.`);
  } catch (error) {
    handleErrors(error);
    throw error;
  }
};

export { fetchData, postData, deleteData };
