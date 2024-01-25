import { detailCard } from "./components-detail.js";
const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);

const API_ENDPOINTID = `  https://striveschool-api.herokuapp.com/api/product/${id}`;

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDYxMzM2NDMsImV4cCI6MTcwNzM0MzI0M30.zk_C74s1SwQP9wyIK_4xgeCdmbTfavSb-0ppG9A8P5g";

const objHttpsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const fetchDataID = async () => {
  try {
    const response = await fetch(API_ENDPOINTID, objHttpsGet);
    const product = await response.json();
    console.log(id);

    return product;
  } catch (error) {
    console.log(error);
  }
};
const product = await fetchDataID();
detailCard(product);
