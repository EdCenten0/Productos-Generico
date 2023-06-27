//main.js
import { getProducts } from "./products.js";

getProducts()
  .then(products => {
    console.log(products);
  })
  .catch(error => {
    console.error(error);
  });
