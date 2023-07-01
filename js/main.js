//main.js
import { getProducts } from "./data/products.js";

let productos = await getProducts()
    .then((APIproducts) => {
        return APIproducts
    })
    .catch((err) => console.log(err));

    

function assembleProducts(){
    for(let i = 0; i < 10; i++){
        const list__track = document.querySelector('.main__banner_section__carousel__list__track');
        const product = document.createElement('div');
        const product__container = document.createElement('div');
        const product__container__link = document.createElement('a');
        const product__container__link__name = document.createElement('p');
        const product__container__link__picture = document.createElement('picture');
        const product__container__link__picture__img = document.createElement('img');

        product.classList.add('main__banner_section__carousel__list__track__product');
        
        product__container__link.setAttribute('src', '#');
        product__container__link__name.innerText = productos[i].title;
        console.log(productos[i].images[1])
        product__container__link__picture__img.setAttribute('src', productos[i].images[1]);
        
        product__container__link__picture.append(product__container__link__picture__img);
        product__container__link.append(product__container__link__name, product__container__link__picture);
        product__container.append(product__container__link);
        product.append(product__container);
        list__track.append(product);
        

    }
}

console.log("1");
assembleProducts();
console.log("2");