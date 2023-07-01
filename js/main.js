//main.js
import { getProducts } from "./data/products.js";

let productos = await getProducts()
    .then((APIproducts) => {return APIproducts})
    .catch((err) => console.log(err));

let assembleProducts = () => {

}