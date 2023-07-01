//main.js
import { getProducts } from "./data/products.js";

let productos = await getProducts()
    .then((APIproducts) => {
        return APIproducts
    })
    .catch((err) => console.log(err));

const assembleProducts = () => {
    for(let i = 0; i < 15; i++){
        
    }
}